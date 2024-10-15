package hcmut.spss.be.dtos;

import hcmut.spss.be.entity.user.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
    private Long userId;
    private String userName;
    private String email;
    private String mssv;
    private boolean enabled;
    private boolean isOnline;
    private Role role;
    private LocalDateTime createdDate;
    private LocalDateTime updatedDate;
}