package com.example.project.Repository;

import com.example.project.Model.Reservations;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReservationsRepository extends JpaRepository<Reservations, Long> {

    List<Reservations> findAllByCarBrand(String carBrand);
}
