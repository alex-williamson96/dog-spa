package com.doggy.spa.models.internal.request;

import jakarta.annotation.Nonnull;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
public class SignupRequest {
    @Nonnull
    private String username;

    @Nonnull
    private String email;

    @Nonnull
    Set<String> role;

    @Nonnull
    private String password;



}
