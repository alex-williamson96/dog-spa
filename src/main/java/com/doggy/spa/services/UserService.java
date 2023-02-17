package com.doggy.spa.services;

import com.doggy.spa.models.User;

import java.util.List;

public interface UserService {
    User findByUsername(String username);

    Boolean checkUsernameAvailability(String username);

    Boolean checkEmailAvailability(String email);

    User saveUser(User user);

    List<User> getAllCustomers();

    List<User> getAllEmployees();
}
