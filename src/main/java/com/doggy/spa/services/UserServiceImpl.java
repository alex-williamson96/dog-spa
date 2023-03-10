package com.doggy.spa.services;

import com.doggy.spa.models.ERole;
import com.doggy.spa.models.User;
import com.doggy.spa.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;

    @Override
    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public Boolean checkUsernameAvailability(String username) {
        return userRepository.existsByUsername(username);
    }

    @Override
    public Boolean checkEmailAvailability(String email) {
        return userRepository.existsByUsername(email);
    }

    @Override
    public List<User> getAllCustomers() {
        return userRepository.findAllByRoles_Name(ERole.ROLE_USER);
    }

    @Override
    public List<User> getAllEmployees() {
        return userRepository.findAllByRoles_Name(ERole.ROLE_EMPLOYEE);
    }

    @Override
    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }
}
