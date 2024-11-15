package hcmut.spss.be.service.impl;

import hcmut.spss.be.dtos.request.LoginRequest;
import hcmut.spss.be.dtos.request.SignupRequest;
import hcmut.spss.be.dtos.response.LoginResponse;
import hcmut.spss.be.dtos.response.MessageResponse;
import hcmut.spss.be.dtos.response.UserInfoResponse;
import hcmut.spss.be.entity.user.Role;
import hcmut.spss.be.entity.user.User;
import hcmut.spss.be.repository.UserRepository;
import hcmut.spss.be.security.jwt.JwtUtils;
import hcmut.spss.be.service.AuthService;
import hcmut.spss.be.utils.AuthUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtils jwtUtils;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AuthUtil authUtil;

    @Override
    public ResponseEntity<?> login(LoginRequest request) {
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

    @Override
    public ResponseEntity<?> signup(SignupRequest request) {
        if(userRepository.existsByUsername(request.getUsername())){
            return ResponseEntity.badRequest().body("Username already exists");
        }

        if(userRepository.existsByEmail(request.getEmail())){
            return ResponseEntity.badRequest().body("Email already used");
        }

        // create new account
        User user = User.builder()
                        .username(request.getUsername())
                        .name(request.getName())
                        .email(request.getEmail())
                        .role(Role.valueOf(request.getRole()))
                        .password(passwordEncoder.encode(request.getPassword()))
                        .mssv(request.getMssv())
                        .phoneNumber(request.getPhone())
                        .enabled(true)
                        .online(false)
                        .avatarUrl("https://firebasestorage.googleapis.com/v0/b/fir-42a90.appspot.com/o/avatar-people-user-svgrepo-com.svg?alt=media&token=d19e3ab3-4ff0-4088-a0b8-d2d7bfa6c54d")
                        .build();
        userRepository.save(user);
        return ResponseEntity.ok(new MessageResponse("User registered successfully"));
    }

    @Override
    public UserInfoResponse getUserInfo() {
        User user = authUtil.loggedInUser();
        return UserInfoResponse.fromUser(user);
    }
}
