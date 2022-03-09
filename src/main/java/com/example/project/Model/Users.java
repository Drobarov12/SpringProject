package com.example.project.Model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "UsersOnPage")
public class Users {
    @Id
    private String username;
    private String name;
    private String surname;
    private String telephone;

    public Users() {
    }

    public Users(String username, String name, String surname, String telephone) {
        this.username = username;
        this.name = name;
        this.surname = surname;
        this.telephone = telephone;
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
}
