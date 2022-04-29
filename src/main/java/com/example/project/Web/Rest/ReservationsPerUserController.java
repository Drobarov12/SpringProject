package com.example.project.Web.Rest;

import com.example.project.Model.ReservationsPerUser;
import com.example.project.Service.ReservationsPerUserService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/reservations_per_user")
public class ReservationsPerUserController {
    private final ReservationsPerUserService reservationsPerUserService;

    public ReservationsPerUserController(ReservationsPerUserService reservationsPerUserService) {
        this.reservationsPerUserService = reservationsPerUserService;
    }

    @GetMapping
    public List<ReservationsPerUser> listAll(){
        return this.reservationsPerUserService.listAllUserReservations();
    }
}
