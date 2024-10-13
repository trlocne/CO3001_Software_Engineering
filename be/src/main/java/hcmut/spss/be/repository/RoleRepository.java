package hcmut.spss.be.repository;

import hcmut.spss.be.entity.user.AppRole;
import hcmut.spss.be.entity.user.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Integer> {
    Optional<Role> findByRoleName(AppRole appRole);
}
