package com.example.project.Web.Rest;

import com.example.project.Model.Reservations;
import com.example.project.Model.ServiceType;
import com.example.project.Service.ReservationsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/reservations")
public class ReservationsRestController {
    private final ReservationsService reservationsService;

    public ReservationsRestController(ReservationsService reservationsService) {
        this.reservationsService = reservationsService;
    }

    @GetMapping
    public List<Reservations> listAll(){
        return this.reservationsService.listAllReservations();
    }

    @PostMapping("/add")
    public ResponseEntity<Reservations> addRezervation(@RequestParam String username, @RequestParam String name,
                               @RequestParam String surname, @RequestParam String telephone,
                               @RequestParam String carBrand, @RequestParam String carModel,
                               @RequestParam ServiceType serviceType, @RequestParam(required = false) String description){
        return this.reservationsService.create(username,name,surname,telephone,carBrand,carModel,serviceType,description)
                .map(rez -> ResponseEntity.ok().body(rez))
                .orElseGet(() -> ResponseEntity.badRequest().build());

    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<Reservations> editRezervation(@PathVariable Long id ,
                                                        @RequestParam String username, @RequestParam String name,
                                                        @RequestParam String surname, @RequestParam String telephone,
                                                        @RequestParam String carBrand, @RequestParam String carModel,
                                                        @RequestParam ServiceType serviceType, @RequestParam(required = false) String description){
        return this.reservationsService.update(id,username,name,surname,telephone,carBrand,carModel,serviceType,description)
                .map(rez -> ResponseEntity.ok().body(rez))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity delete(@PathVariable Long id){
        this.reservationsService.delete(id);
        if(this.reservationsService.findById(id).isEmpty()) return ResponseEntity.ok().build();
        return ResponseEntity.badRequest().build();
    }



}
