package com.doggy.spa.services;

import com.doggy.spa.models.Dog;
import com.doggy.spa.models.User;

import java.util.List;
import java.util.Optional;

public interface DogService {

    Optional<Dog> findById(Long id);

    void saveDog(Dog dog);

    List<Dog> findAllDogs();

    Dog updateAllDogInfo(Dog dog, Dog dogInfo, User user);
}
