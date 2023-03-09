package com.doggy.spa.controllers;

import com.doggy.spa.models.Dog;
import com.doggy.spa.models.User;
import com.doggy.spa.services.DogServiceImpl;
import com.doggy.spa.services.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/v1/dog")
public class DogController {
    @Autowired
    DogServiceImpl dogService;

    @Autowired
    UserServiceImpl userService;

    @GetMapping("/{dogId}")
    public Dog getDogById(@PathVariable("dogId") Long dogId) {
        return dogService.findById(dogId).orElse(null);
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

    @PutMapping("/update/{userName}")
    public ResponseEntity<?> updateDog(@RequestBody Dog dogInfo, @PathVariable("userName") String userName) {
        Optional<Dog> _dog = dogService.findById(dogInfo.getDogId());

        if (_dog.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        User user = userService.findByUsername(userName);

        if (user == null) {
            return ResponseEntity.notFound().build();
        }

        Dog dog = dogService.updateAllDogInfo(_dog.get(), dogInfo, user);

        dogService.saveDog(dog);

        return ResponseEntity.ok().build();
    }

    @GetMapping("/all")
    @PreAuthorize("hasRole('EMPLOYEE') or hasRole('ADMIN')")
    public List<Dog> getAllDogs() {
        return dogService.findAllDogs();
    }

}
