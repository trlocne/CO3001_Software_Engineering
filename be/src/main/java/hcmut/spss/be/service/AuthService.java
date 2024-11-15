package hcmut.spss.be.service;

import hcmut.spss.be.dtos.request.LoginRequest;
import hcmut.spss.be.dtos.request.SignupRequest;
import hcmut.spss.be.dtos.response.UserInfoResponse;
import org.springframework.http.ResponseEntity;

public interface AuthService {
    ResponseEntity<?> login(LoginRequest request);

    ResponseEntity<?> signup(SignupRequest request);

    UserInfoResponse getUserInfo();
}
