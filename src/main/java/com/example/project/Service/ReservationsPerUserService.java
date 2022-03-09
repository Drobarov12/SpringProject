package com.example.project.Service;

import com.example.project.Model.ReservationsPerUser;

import java.util.List;

public interface ReservationsPerUserService {

    List<ReservationsPerUser> listAllUserReservations();

    ReservationsPerUser findByUsername(String username);
}
