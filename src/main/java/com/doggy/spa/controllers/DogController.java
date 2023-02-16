package com.doggy.spa.controllers;

import com.doggy.spa.models.Dog;
import com.doggy.spa.models.User;
import com.doggy.spa.services.DogServiceImpl;
import com.doggy.spa.services.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/v1/dog")
public class DogController {
    @Autowired
    DogServiceImpl dogService;

    @Autowired
    UserServiceImpl userService;

    @GetMapping
    public Dog getDogById(Long id) {
        return dogService.findById(id).orElse(null);
    }

    @PostMapping("/create/{userName}")
    public ResponseEntity<?> createDog(@RequestBody Dog dog, @PathVariable("userName") String userName) {
        User user = userService.findByUsername(userName);

        dog.setUser(user);
        dog.setUpdatedDate(LocalDate.now());
        dog.setCreatedDate(LocalDate.now());

        dogService.saveDog(dog);

        return ResponseEntity.ok().build();
    }

    @PutMapping
    public ResponseEntity<?> updateDog(@RequestBody Dog dogInfo) {
        Optional<Dog> _dog = dogService.findById(dogInfo.getDogId());

        if (_dog.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Dog dog = _dog.get();

        dog.setUpdatedDate(LocalDate.now());
        dog.setUpdatedByUser(dogInfo.getUpdatedByUser());
        dog.setBirthday(dogInfo.getBirthday());
        dog.setName(dogInfo.getName());
        dog.setEmergencyContact(dogInfo.getEmergencyContact());





    }


}
