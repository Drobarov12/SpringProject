package com.example.project.Web;


import com.example.project.Model.Reservations;
import com.example.project.Model.ServiceType;
import com.example.project.Service.ReservationsService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Arrays;
import java.util.List;

import static com.example.project.Model.ServiceType.*;

@Controller
public class ReservationsController {

    private final ReservationsService reservationsService;

    public ReservationsController(ReservationsService reservationsService) {
        this.reservationsService = reservationsService;
    }

    @GetMapping("/reservation")
    public String showReservations(Model model) {
        List<Reservations> reservations = this.reservationsService.listAllReservations();
        model.addAttribute("reservations", reservations);
        return "reservations.html";
    }

    @GetMapping("/reservation/add")
    public String showAdd(Model model) {
        List<ServiceType> types = Arrays.asList(REGULAR_CHECK, CAR_PROBLEM, CHECK, OTHER);

        model.addAttribute("types", types);
        return "addReservation.html";
    }

    @GetMapping("/reservation/{id}/edit")
    public String showEdit(@PathVariable Long id, Model model) {
        Reservations res = this.reservationsService.findById(id);
        List<ServiceType> types = Arrays.asList(REGULAR_CHECK, CAR_PROBLEM, CHECK, OTHER);

        model.addAttribute("types", types);
        model.addAttribute("reservation", res);

        return "editReservation.html";

    }

    @PostMapping("/reservation")
    public String crate(@RequestParam String username,
                        @RequestParam String name,
                        @RequestParam String surname,
                        @RequestParam String telephone,
                        @RequestParam String carBrand,
                        @RequestParam String carModel,
                        @RequestParam ServiceType serviceType){
        this.reservationsService.create(username, name, surname, telephone, carBrand, carModel, serviceType);
        return "redirect:/reservation";
    }

    @PostMapping("/reservation/{id}")
    public String update(@PathVariable Long id,
                        @RequestParam String username,
                        @RequestParam String name,
                        @RequestParam String surname,
                        @RequestParam String telephone,
                        @RequestParam String carBrand,
                        @RequestParam String carModel,
                        @RequestParam ServiceType serviceType){
        this.reservationsService.update(id,username, name, surname, telephone, carBrand, carModel, serviceType);
        return "redirect:/reservation";
    }

    @PostMapping("/reservation/{id}/delete")
    public String delete(@PathVariable Long id){
        this.reservationsService.delete(id);
        return "redirect:/reservation";
    }

}
