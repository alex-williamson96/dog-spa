package com.doggy.spa.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table
@Getter
@Setter
public class Dog {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO, generator="my_entity_seq_gen")
    @SequenceGenerator(name="my_entity_seq_gen", sequenceName="MY_ENTITY_SEQ")
    @Column
    private Long dogId;

    @Column
    private String name;

    @Column
    private LocalDate birthday;

    @Column
    private String preferredVet;

    // picture of dog

    @Column
    private String emergencyContact;

    @Column
    private String ownerNotes;

    @Column
    private String privateNotes;

    @Column
    private String medicalInformation;

    @Column
    private LocalDate createdDate;

    @Column
    private LocalDate updatedDate;

    @Column
    private String updatedByUser;

    @ManyToOne
    @JoinColumn(name = "userId")
    private User user;
}
