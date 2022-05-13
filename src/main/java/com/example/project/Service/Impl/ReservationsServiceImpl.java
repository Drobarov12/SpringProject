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
    public Optional<Reservations> create(Reservations reservations) {
        Reservations temp = new Reservations(reservations.getUsername(),reservations.getName(),
                reservations.getSurname(),reservations.getTelephone(), reservations.getCarBrand(),
                reservations.getCarModel(),reservations.getServiceType(),reservations.getDescription());
        this.reservationsRepository.save(temp);
        return Optional.of(temp);
    }

    @Override
    public Optional<Reservations> update(Long id, Reservations reservations) {
        Reservations temp = this.findById(id).orElseThrow(ReservationNotFound::new);
        temp.setUsername(reservations.getUsername());
        temp.setName(reservations.getName());
        temp.setSurname(reservations.getSurname());
        temp.setTelephone(reservations.getTelephone());
        temp.setCarBrand(reservations.getCarBrand());
        temp.setCarModel(reservations.getCarModel());
        temp.setServiceType(reservations.getServiceType());
        temp.setDescription(reservations.getDescription());
        this.reservationsRepository.save(temp);
        return Optional.of(temp);
    }
}
