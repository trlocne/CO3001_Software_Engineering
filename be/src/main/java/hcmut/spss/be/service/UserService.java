package hcmut.spss.be.service;

import hcmut.spss.be.dtos.UserDTO;
import hcmut.spss.be.entity.user.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    void updateUserRole(Long userId, String roleName);

    List<User> getAllUsers();

    UserDTO getUserById(Long id);

    User findByUsername(String username);

    Optional<User> findByEmail(String email);

    User registerUser(User user);
}