package com.example.project.Service.Impl;

import com.example.project.Model.Exeptions.ReservationNotFound;
import com.example.project.Model.Exeptions.ReservationPerUserNotFound;
import com.example.project.Model.ReservationsPerUser;
import com.example.project.Repository.ReservationsPerUserRepository;
import com.example.project.Service.ReservationsPerUserService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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
    public Optional<ReservationsPerUser> findByUsername(String username) {
        return this.reservationsPerUserRepository.findById(username);
    }

    @Override
    public ReservationsPerUser create(String username) {
        if(this.findByUsername(username).isPresent()){
            ReservationsPerUser temp = this.findByUsername(username).orElseThrow(ReservationPerUserNotFound::new);
            temp.setReservationsNum(temp.getReservationsNum()+1);
            return temp;
        }
        else{
            ReservationsPerUser r = new ReservationsPerUser(username,Long.valueOf(0));
            return r;
        }
    }
}
