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

    @GetMapping ("/serviceTypes")
    public List<ServiceType> serviceTypeList(){
        return List.of(ServiceType.CHECK,ServiceType.CAR_PROBLEM,ServiceType.REGULAR_CHECK,ServiceType.OTHER);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Reservations> getReservation(@PathVariable Long id){
        return this.reservationsService.findById(id)
                .map(rez -> ResponseEntity.ok().body(rez))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }

    @PostMapping("/add")
    public ResponseEntity<Reservations> addRezervation(@RequestBody Reservations reservations){
        return this.reservationsService.create(reservations)
                .map(rez -> ResponseEntity.ok().body(rez))
                .orElseGet(() -> ResponseEntity.badRequest().build());

    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<Reservations> editRezervation(@PathVariable Long id ,
                                                        @RequestBody Reservations reservations){
        return this.reservationsService.update(id,reservations)
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
