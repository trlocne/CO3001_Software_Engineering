package hcmut.spss.be.service.impl;

import hcmut.spss.be.entity.user.Role;
import hcmut.spss.be.repository.RoleRepository;
import hcmut.spss.be.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleServiceImpl implements RoleService {
    @Autowired
    RoleRepository roleRepository;

    @Override
    public List<Role> getAllRoles() {
        return roleRepository.findAll();
    }
}
