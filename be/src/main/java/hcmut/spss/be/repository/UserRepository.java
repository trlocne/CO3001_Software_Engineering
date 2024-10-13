package hcmut.spss.be.repository;

import hcmut.spss.be.entity.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<Object> findByUserName(String username);
}
