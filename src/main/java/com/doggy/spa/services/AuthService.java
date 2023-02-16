package com.doggy.spa.services;

import com.doggy.spa.models.internal.request.LoginRequest;
import org.springframework.security.core.Authentication;

public interface AuthService {
    Authentication getAuthentication(LoginRequest loginRequest);
}
