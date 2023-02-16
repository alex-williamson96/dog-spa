package com.doggy.spa.services;

import com.doggy.spa.models.ERole;
import com.doggy.spa.models.Role;

import java.util.Optional;

public interface RoleService {
    Optional<Role> findByName(ERole role);
}
