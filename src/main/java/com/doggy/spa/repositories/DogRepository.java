package com.doggy.spa.repositories;

import com.doggy.spa.models.Dog;
import com.doggy.spa.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Set;

public interface DogRepository extends JpaRepository<Dog, Long> {

    Set<Dog> findAllByUser(User user);
}
