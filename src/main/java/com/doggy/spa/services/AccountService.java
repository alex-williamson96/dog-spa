package com.doggy.spa.services;

import com.doggy.spa.models.User;

public interface AccountService {
    User findByUsername(String username);
}
