package com.example.project.Model;

import javax.persistence.*;

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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getCarBrand() {
        return carBrand;
    }

    public void setCarBrand(String carBrand) {
        this.carBrand = carBrand;
    }

    public String getCarModel() {
        return carModel;
    }

    public void setCarModel(String carModel) {
        this.carModel = carModel;
    }

    public ServiceType getServiceType() {
        return serviceType;
    }

    public void setServiceType(ServiceType serviceType) {
        this.serviceType = serviceType;
    }
}
