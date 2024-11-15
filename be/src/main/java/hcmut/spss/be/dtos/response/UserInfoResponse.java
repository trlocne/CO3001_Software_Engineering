package hcmut.spss.be.dtos.response;

import hcmut.spss.be.entity.user.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserInfoResponse {
    private Long id;
    private String userName;
    private String email;
    private String name;
    private String mssv;
    private String phone;
    private String avtUrl;
    private String role;

    public static UserInfoResponse fromUser(User user) {
        return UserInfoResponse.builder()
                .id(user.getUserId())
                .userName(user.getUsername())
                .name(user.getName())
                .email(user.getEmail())
                .mssv(user.getMssv())
                .phone(user.getPhoneNumber())
                .avtUrl(user.getAvatarUrl())
                .role(user.getRole().name())
                .build();
    }
}
