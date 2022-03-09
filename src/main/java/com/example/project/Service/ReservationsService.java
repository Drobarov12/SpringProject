package com.example.project.Service;

import com.example.project.Model.Reservations;
import com.example.project.Model.ServiceType;

import java.util.List;

public interface ReservationsService {

    List<Reservations> listAllReservations();

    Reservations findById(Long id);

    Reservations delete(Long id);

    Reservations create( String usename, String name, String surname,
                        String telephone, String carBrand, String carModel, ServiceType serviceType);

    Reservations update(Long id, String usename, String name, String surname,
                        String telephone, String carBrand, String carModel, ServiceType serviceType);

}
