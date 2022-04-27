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

    public Users() {
    }

    public Users(String username, String name, String surname,String password, String telephone) {
        this.username = username;
        this.name = name;
        this.surname = surname;
        this.telephone = telephone;
        this.password = password;
    }

}
