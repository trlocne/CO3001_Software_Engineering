package hcmut.spss.be.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class UserInfoResponse {
    private Long id;
    private String username;
    private String email;
    private String mssv;
    private boolean enabled;
    private boolean isOnline;
    private List<String> roles;
}