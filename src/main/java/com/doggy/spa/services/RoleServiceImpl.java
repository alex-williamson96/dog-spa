package com.doggy.spa.services;

import com.doggy.spa.models.ERole;
import com.doggy.spa.models.Role;
import com.doggy.spa.repositories.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RoleServiceImpl implements RoleService {

    @Autowired
    RoleRepository roleRepository;

    @Override
    public Optional<Role> findByName(ERole role) {
        return roleRepository.findByName(role);
    }
}
