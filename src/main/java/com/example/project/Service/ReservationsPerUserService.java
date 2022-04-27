package com.example.project.Service;

import com.example.project.Model.ReservationsPerUser;

import java.util.List;
import java.util.Optional;

public interface ReservationsPerUserService {

    List<ReservationsPerUser> listAllUserReservations();

    Optional<ReservationsPerUser> findByUsername(String username);

    ReservationsPerUser create(String username);
}
