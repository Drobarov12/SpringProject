package com.example.project.Service.Impl;

import com.example.project.Model.Exeptions.ReservationNotFound;
import com.example.project.Model.Exeptions.ReservationPerUserNotFound;
import com.example.project.Model.ReservationsPerUser;
import com.example.project.Repository.ReservationsPerUserRepository;
import com.example.project.Service.ReservationsPerUserService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReservationsPerUserServiceImpl implements ReservationsPerUserService {

    private final ReservationsPerUserRepository reservationsPerUserRepository;

    public ReservationsPerUserServiceImpl(ReservationsPerUserRepository reservationsPerUserRepository) {
        this.reservationsPerUserRepository = reservationsPerUserRepository;
    }

    @Override
    public List<ReservationsPerUser> listAllUserReservations() {
        return this.reservationsPerUserRepository.findAll();
    }

    @Override
    public ReservationsPerUser findByUsername(String username) {
        return this.reservationsPerUserRepository.findById(username).orElseThrow(ReservationPerUserNotFound::new);
    }
}
