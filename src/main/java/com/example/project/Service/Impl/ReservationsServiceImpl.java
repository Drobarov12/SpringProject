package com.example.project.Service.Impl;

import com.example.project.Model.Exeptions.ReservationNotFound;
import com.example.project.Model.Reservations;
import com.example.project.Model.ServiceType;
import com.example.project.Repository.ReservationsRepository;
import com.example.project.Service.ReservationsService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReservationsServiceImpl implements ReservationsService {

    private final ReservationsRepository reservationsRepository;

    public ReservationsServiceImpl(ReservationsRepository reservationsRepository) {
        this.reservationsRepository = reservationsRepository;
    }


    @Override
    public List<Reservations> listAllReservations() {
        return this.reservationsRepository.findAll();
    }

    @Override
    public List<Reservations> findByCarBrand(String carBrand) {
        return this.reservationsRepository.findAllByCarBrand(carBrand);
    }

    @Override
    public Optional<Reservations> findById(Long id) {
        return this.reservationsRepository.findById(id);
    }

    @Override
    public void delete(Long id) {
        Reservations temp = this.findById(id).orElseThrow(ReservationNotFound::new);
        this.reservationsRepository.deleteById(id);
    }

    @Override
    public Optional<Reservations> create(String usename, String name, String surname, String telephone,
                                         String carBrand, String carModel, ServiceType serviceType, String description) {
        Reservations temp = new Reservations(usename, name, surname, telephone, carBrand, carModel, serviceType,description);
        this.reservationsRepository.save(temp);
        return Optional.of(temp);
    }

    @Override
    public Optional<Reservations> update(Long id, String usename, String name, String surname, String telephone,
                              String carBrand, String carModel, ServiceType serviceType,String description) {
        Reservations temp = this.findById(id).orElseThrow(ReservationNotFound::new);
        temp.setUsername(usename);
        temp.setName(name);
        temp.setSurname(surname);
        temp.setTelephone(telephone);
        temp.setCarBrand(carBrand);
        temp.setCarModel(carModel);
        temp.setServiceType(serviceType);
        temp.setDescription(description);
        this.reservationsRepository.save(temp);
        return Optional.of(temp);
    }
}
