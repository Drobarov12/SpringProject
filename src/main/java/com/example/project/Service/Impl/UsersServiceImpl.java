package com.example.project.Service.Impl;

import com.example.project.Model.Exeptions.InvalidUserIdExeption;
import com.example.project.Model.UserType;
import com.example.project.Model.Users;
import com.example.project.Repository.UsersRepository;
import com.example.project.Service.UsersService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class UsersServiceImpl implements UsersService {

    private final UsersRepository usersRepository;

    public UsersServiceImpl(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }


    @Override
    public List<Users> listAllUsers() {
        return this.usersRepository.findAll();
    }

    @Override
    public Optional<Users> findByUsername(String username) {
        return this.usersRepository.findById(username);
    }



    @Override
    public void deleteWithUsername(String username) {
        this.usersRepository.deleteById(username);
    }

    @Override
    public Optional<Users> ceate(Users users) {
        Users u = new Users(users.getUsername(), users.getName(), users.getSurname(),
                users.getPassword(), users.getTelephone(), UserType.USER);
        this.usersRepository.save(u);
        return Optional.of(u);
    }

    @Override
    public void changeRole(String username) {
        Users u = this.usersRepository.getById(username);
        if (u.getUserType().equals(UserType.USER)){
            u.setUserType(UserType.ADMIN);
        }
        else{
            u.setUserType(UserType.USER);
        }
        this.usersRepository.save(u);
    }

    @Override
    public Optional<Users> edit(Users users) {
        Users u = this.usersRepository.findById(users.getUsername())
                .orElseThrow(InvalidUserIdExeption::new);
        u.setName(users.getName());
        u.setSurname(users.getSurname());
        u.setPassword(users.getPassword());
        u.setTelephone(users.getTelephone());
        this.usersRepository.save(u);
        return Optional.of(u);
    }
}
