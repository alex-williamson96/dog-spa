package com.doggy.spa.controllers;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/v1/user")
public class UserController {

    @GetMapping("/any")
    public String any() {
        return "everyone can access this";
    }
    @GetMapping("/user")
    @PreAuthorize("hasRole('USER')")
    public String user() {
        return "users, employees, and admins can access this";
    }

    @GetMapping("/employee")
    @PreAuthorize("hasRole('EMPLOYEE') or hasAuthority('ADMIN')")
    public String worker() {
        return "only workers and admins can see this";
    }

    @GetMapping("/admin")
    @PreAuthorize("hasRole('ADMIN')")
    public String admin() {
        return "ony admins can see this";
    }


}
