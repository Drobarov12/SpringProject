package com.example.project.Model;


import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class ReservationsPerUser {
    @Id
    private String username;
    private Long reservationsNum;

    public ReservationsPerUser() {
    }

    public ReservationsPerUser(String username, Long reservationsNum) {
        this.username = username;
        this.reservationsNum = reservationsNum;
    }

}
