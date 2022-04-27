package com.example.project.Service;

import com.example.project.Model.Users;

import java.util.List;

public interface UsersService {

    List<Users> listAllUsers();

    Users findByUsername(String username);

    void deleteWithUsername(String username);

    Users ceate(String username,String name,String surname,String password,String telphone);


}
