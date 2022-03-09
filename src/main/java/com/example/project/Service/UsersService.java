package com.example.project.Service;

import com.example.project.Model.Users;

import java.util.List;

public interface UsersService {

    List<Users> listAllUsers();

    Users findByUsername(String username);

    Users deleteWithUsername(String username);



}
