package com.example.project.Service;

import com.example.project.Model.Reservations;
import com.example.project.Model.ServiceType;

import java.util.List;
import java.util.Optional;

public interface ReservationsService {

    List<Reservations> listAllReservations();

    List<Reservations> findByCarBrand(String carBrand);

    Optional<Reservations> findById(Long id);


    void delete(Long id);

    Optional<Reservations> create(Reservations reservations);

    Optional<Reservations> update(Long id, Reservations reservations);

}
