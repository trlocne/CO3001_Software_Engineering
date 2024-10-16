package hcmut.spss.be.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserInfoResponse {
    private Long userId;
    private String userName;
    private String email;
    private String name;
    private String mssv;
    private String phone;
    private String avtUrl;
    private boolean enable;
    private boolean online;
    private List<String> roles;
}
