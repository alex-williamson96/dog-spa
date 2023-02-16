package com.doggy.spa.services;

import com.doggy.spa.models.Dog;
import com.doggy.spa.repositories.DogRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;
import java.util.Set;

public class DogServiceImpl implements DogService{

    @Autowired
    DogRepository dogRepository;

    @Override
    public Optional<Dog> findById(Long id) {
        return dogRepository.findById(id);
    }

    @Override
    public Dog saveDog(Dog dog) {
        return dogRepository.save(dog);
    }

    @Override
    public List<Dog> findAllDogs() {
        return dogRepository.findAll();
    }
}
