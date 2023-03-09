package com.doggy.spa.controllers;

import com.doggy.spa.models.User;
import com.doggy.spa.security.services.UserDetailsImpl;
import com.doggy.spa.services.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/v1/user")
public class UserController {

    @Autowired
    UserServiceImpl userService;

    @GetMapping("/any")
    public String any() {
        return "everyone can access this";
    }
    @GetMapping("/user")
    @PreAuthorize("hasRole('USER')")
    public String user() {
        return "welcome " + SecurityContextHolder.getContext().getAuthentication().getName();
    }

    @GetMapping("/employee")
    @PreAuthorize("hasRole('EMPLOYEE') or hasRole('ADMIN')")
    public String worker() {
        return "only workers and admins can see this";
    }

    @GetMapping("/admin")
    @PreAuthorize("hasRole('ADMIN')")
    public String admin() {
        return "ony admins can see this";
    }

    @GetMapping
    @PreAuthorize("hasRole('EMPLOYEE') or hasRole('ADMIN') or hasRole('USER')")
    public User getUserDetails() {
        return userService.findByUsername(SecurityContextHolder.getContext().getAuthentication().getName());
    }

    @GetMapping("/all")
    @PreAuthorize("hasRole('EMPLOYEE') or hasRole('ADMIN')")
    public List<User> getAllCustomers() {
        return userService.getAllCustomers();
    }

    @GetMapping("/employees")
    @PreAuthorize("hasRole('ADMIN')")
    public List<User> getAllEmployees() {
        return userService.getAllEmployees();
    }


}
