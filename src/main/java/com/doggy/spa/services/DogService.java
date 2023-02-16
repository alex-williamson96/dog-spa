package com.doggy.spa.services;

import com.doggy.spa.models.Dog;

import java.util.List;
import java.util.Optional;

public interface DogService {

    Optional<Dog> findById(Long id);

    Dog saveDog(Dog dog);

    List<Dog> findAllDogs();
}
