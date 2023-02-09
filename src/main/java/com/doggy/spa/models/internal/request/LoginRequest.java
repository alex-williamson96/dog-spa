package com.doggy.spa.models.internal.request;

import jakarta.annotation.Nonnull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginRequest {
    @Nonnull
    private String username;

    @Nonnull
    private String password;

}
