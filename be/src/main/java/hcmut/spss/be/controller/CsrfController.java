package hcmut.spss.be.controller;

import io.swagger.v3.oas.annotations.Operation;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CsrfController {
    @GetMapping("/api/csrf-token")
    @Operation(tags = "CSRF APIs")
    public CsrfToken csrfToken(HttpServletRequest request) {
        return  (CsrfToken) request.getAttribute(CsrfToken.class.getName());
    }
}
