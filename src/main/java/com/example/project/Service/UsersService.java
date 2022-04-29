package com.example.project.Service;

import com.example.project.Model.UserType;
import com.example.project.Model.Users;

import java.util.List;
import java.util.Optional;

public interface UsersService {

    List<Users> listAllUsers();

    Optional<Users> findByUsername(String username);

    void deleteWithUsername(String username);

    Optional<Users> ceate(String username, String name, String surname, String password, String telphone);

    void changeRole(String username);


}
