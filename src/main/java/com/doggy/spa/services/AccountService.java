package com.doggy.spa.services;

import com.doggy.spa.models.Account;
import org.springframework.stereotype.Service;

public interface AccountService {
    Account findByUsername(String username);
}
