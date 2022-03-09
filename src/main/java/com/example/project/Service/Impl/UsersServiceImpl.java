package com.example.project.Service.Impl;

import com.example.project.Model.Exeptions.InvalidUserIdExeption;
import com.example.project.Model.Users;
import com.example.project.Repository.UsersRepository;
import com.example.project.Service.UsersService;
import org.springframework.stereotype.Service;

import java.util.List;


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
    public Users findByUsername(String username) {
        return this.usersRepository.findById(username).orElseThrow(InvalidUserIdExeption::new);
    }

    @Override
    public Users deleteWithUsername(String username) {
        Users temp = this.findByUsername(username);
        this.usersRepository.deleteById(username);
        return temp;
    }
}