package hcmut.spss.be.controller;

import hcmut.spss.be.entity.user.AppRole;
import hcmut.spss.be.entity.user.Role;
import hcmut.spss.be.entity.user.User;
import hcmut.spss.be.repository.RoleRepository;
import hcmut.spss.be.repository.UserRepository;
import hcmut.spss.be.request.LoginRequest;
import hcmut.spss.be.request.SignupRequest;
import hcmut.spss.be.response.LoginResponse;
import hcmut.spss.be.response.MessageResponse;
import hcmut.spss.be.response.UserInfoResponse;
import hcmut.spss.be.security.jwt.JwtUtils;
import hcmut.spss.be.security.service.UserDetailsImpl;
import hcmut.spss.be.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final JwtUtils jwtUtils;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private UserService userService;

    public AuthController(AuthenticationManager authenticationManager, JwtUtils jwtUtils) {
        this.authenticationManager = authenticationManager;
        this.jwtUtils = jwtUtils;
    }

    @PostMapping("/public/signin")
    @Operation(tags = "Auth APIs")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest request) {
        Authentication authentication;
        try {
            authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        }catch (AuthenticationException e) {
            Map<String, Object> map = new HashMap<>();
            map.put("message", "Bad credentials");
            map.put("status", false);
            return new ResponseEntity<Object> (map, HttpStatus.NOT_FOUND);
        }

        // set authentication
        SecurityContextHolder.getContext().setAuthentication(authentication);

        // specific to our implementation
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

        String jwtToken = jwtUtils.generateTokenFromUsername(userDetails);

        // collect roles form the UserDetails
        List<String> roles = userDetails.getAuthorities().stream().map(GrantedAuthority::getAuthority).toList();

        // prepare the response body, now including the jwt token directly in the body
        LoginResponse response = new LoginResponse(userDetails.getUsername(), jwtToken, roles);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/public/signup")
    @Operation(tags = "Auth APIs")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest request) {
        if(userRepository.existsByUsername(request.getUsername())){
            return ResponseEntity.badRequest().body("Username already exists");
        }

        if(userRepository.existsByEmail(request.getEmail())){
            return ResponseEntity.badRequest().body("Email already used");
        }

        // create new account
        User user = new User(
                request.getUsername(),
                request.getName(),
                request.getEmail(),
                passwordEncoder.encode(request.getPassword()),
                request.getPhone()
        );

        Set<String> strRoles = request.getRoles();
        Role role;

        if (strRoles == null || strRoles.isEmpty()){
            role = roleRepository.findByRoleName(AppRole.STUDENT).orElseThrow(() -> new RuntimeException("Role not found"));
        }else {
            String roleStr = strRoles.iterator().next();
            if (roleStr.equals("student")){
                role = roleRepository.findByRoleName(AppRole.STUDENT).orElseThrow(() -> new RuntimeException("Role not found"));
            }else if(roleStr.equals("admin")){
                role = roleRepository.findByRoleName(AppRole.ADMIN).orElseThrow(() -> new RuntimeException("Role not found"));
            }else {
                role = roleRepository.findByRoleName(AppRole.SPSO).orElseThrow(() -> new RuntimeException("Role not found"));
            }
            user.setEnabled(true);
            user.setOnline(false);
            user.setAvatarUrl("https://firebasestorage.googleapis.com/v0/b/fir-42a90.appspot.com/o/avatar-people-user-svgrepo-com.svg?alt=media&token=d19e3ab3-4ff0-4088-a0b8-d2d7bfa6c54d");
        }

        user.setRole(role);
        userRepository.save(user);
        return ResponseEntity.ok(new MessageResponse("User registered successfully"));
    }

    @GetMapping("/user")
    @Operation(tags = "Auth APIs")
    public ResponseEntity<?> getUserDetails(@AuthenticationPrincipal UserDetails userDetails) {
        User user = userService.findByUsername(userDetails.getUsername());

        List<String> roles = userDetails.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList());

        UserInfoResponse response = new UserInfoResponse(
                user.getUserId(),
                user.getUsername(),
                user.getEmail(),
                user.getName(),
                user.getMssv(),
                user.getPhoneNumber(),
                user.getAvatarUrl(),
                user.isEnabled(),
                user.isOnline(),
                roles
        );

        return ResponseEntity.ok().body(response);
    }

    @GetMapping("/username")
    @Operation(tags = "Auth APIs")
    public String currentUserName(@AuthenticationPrincipal UserDetails userDetails) {
        return (userDetails != null) ? userDetails.getUsername() : "";
    }
}