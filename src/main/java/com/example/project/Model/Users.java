package com.example.project.Model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "users_on_page")
public class Users {
    @Id
    private String username;
    private String name;
    private String surname;
    private String password;
    private String telephone;
    @Enumerated(value = EnumType.STRING)
    private UserType userType;

    public Users() {
    }

    public Users(String username, String name, String surname, String password, String telephone, UserType userType) {
        this.username = username;
        this.name = name;
        this.surname = surname;
        this.password = password;
        this.telephone = telephone;
        this.userType = userType;
    }
}
