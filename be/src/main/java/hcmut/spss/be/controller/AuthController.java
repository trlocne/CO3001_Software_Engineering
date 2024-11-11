package hcmut.spss.be.controller;

import hcmut.spss.be.dtos.request.LoginRequest;
import hcmut.spss.be.dtos.request.SignupRequest;
import hcmut.spss.be.dtos.response.MessageResponse;
import hcmut.spss.be.service.AuthService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private AuthService authService;

    @PostMapping("/public/signin")
    @Operation(tags = "Auth APIs")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest request) {
        return authService.login(request);
    }

    @PostMapping("/public/signup")
    @Operation(tags = "Auth APIs")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest request) {
        return authService.signup(request);
    }

    @GetMapping("/user")
    @Operation(tags = "Auth APIs")
    public ResponseEntity<?> getUserDetails() {
        try {
            return ResponseEntity.ok(authService.getUserInfo());
        }catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new MessageResponse(e.getMessage()));
        }
    }
}