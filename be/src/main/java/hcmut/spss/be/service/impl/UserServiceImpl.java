package hcmut.spss.be.service.impl;

import hcmut.spss.be.entity.user.Role;
import hcmut.spss.be.entity.user.User;
import hcmut.spss.be.repository.UserRepository;
import hcmut.spss.be.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void updateUserRole(Long userId, String roleName) {
        User user = userRepository.findById(userId).orElseThrow(()
                -> new RuntimeException("User not found"));
        Role role = Role.valueOf(roleName);
        user.setRole(role);
        userRepository.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User findByUsername(String username) {
        Optional<User> user = userRepository.findByUsername(username);
        return user.orElseThrow(() -> new RuntimeException("User not found with username: " + username));
    }

    @Override
    public Optional<User> findByEmail(String email) {
        return Optional.ofNullable(userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("User not found with email: " + email)));
    }
}
