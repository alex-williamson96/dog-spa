package com.doggy.spa.services;

import com.doggy.spa.models.User;

public interface UserService {
    User findByUsername(String username);
}
