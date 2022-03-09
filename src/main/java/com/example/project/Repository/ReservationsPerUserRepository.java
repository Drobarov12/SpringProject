package com.example.project.Repository;

import com.example.project.Model.ReservationsPerUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReservationsPerUserRepository extends JpaRepository<ReservationsPerUser,String> {
}
