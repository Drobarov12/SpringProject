package com.example.project.Model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Reservations {
    @Id
    @GeneratedValue
    private Long id;
    private String username;
    private String name;
    private String surname;
    private String telephone;
    private String carBrand;
    private String carModel;
    @Enumerated(EnumType.STRING)
    private ServiceType serviceType;

    public Reservations() {
    }

    public Reservations(String username, String name, String surname,
                        String telephone, String carBrand, String carModel, ServiceType serviceType) {
        this.username = username;
        this.name = name;
        this.surname = surname;
        this.telephone = telephone;
        this.carBrand = carBrand;
        this.carModel = carModel;
        this.serviceType = serviceType;
    }

}
