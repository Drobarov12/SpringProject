package com.example.project.Model;


import javax.persistence.*;

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

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Long getReservationsNum() {
        return reservationsNum;
    }

    public void setReservationsNum(Long reservationsNum) {
        this.reservationsNum = reservationsNum;
    }
}
