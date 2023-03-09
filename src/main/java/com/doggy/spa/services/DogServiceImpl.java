package com.doggy.spa.services;

import com.doggy.spa.models.Dog;
import com.doggy.spa.models.User;
import com.doggy.spa.repositories.DogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class DogServiceImpl implements DogService{

    @Autowired
    DogRepository dogRepository;

    @Override
    public Optional<Dog> findById(Long id) {
        return dogRepository.findById(id);
    }

    @Override
    public void saveDog(Dog dog) {
        dogRepository.save(dog);
    }

    @Override
    public List<Dog> findAllDogs() {
        return dogRepository.findAll();
    }

    public Dog updateAllDogInfo(Dog dog, Dog dogInfo, User user) {
        dog.setUpdatedDate(LocalDate.now());
        dog.setUpdatedByUser(dogInfo.getUpdatedByUser());
        dog.setBirthday(dogInfo.getBirthday());
        dog.setName(dogInfo.getName());
        dog.setEmergencyContact(dogInfo.getEmergencyContact());
        dog.setPreferredVet(dogInfo.getPreferredVet());
        dog.setBreed(dogInfo.getBreed());
        dog.setUser(user);

        if (dogInfo.getPrivateNotes() != null) {
            dog.setPrivateNotes(dogInfo.getPrivateNotes());
        }

        if (dogInfo.getOwnerNotes() != null) {
            dog.setOwnerNotes(dogInfo.getOwnerNotes());
        }

        return dog;
    }
}
