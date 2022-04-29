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

    Optional<Reservations> create(String usename, String name, String surname,
                                  String telephone, String carBrand, String carModel, ServiceType serviceType, String desctiption);

    Optional<Reservations> update(Long id, String usename, String name, String surname,
                        String telephone, String carBrand, String carModel, ServiceType serviceType,String description);

}
