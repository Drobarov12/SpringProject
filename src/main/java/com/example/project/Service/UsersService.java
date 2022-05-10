package com.example.project.Service;

import com.example.project.Model.UserType;
import com.example.project.Model.Users;

import java.util.List;
import java.util.Optional;

public interface UsersService {

    List<Users> listAllUsers();

    Optional<Users> findByUsername(String username);

    void deleteWithUsername(String username);

    Optional<Users> ceate(Users users);

    void changeRole(String username);

    Optional<Users> edit(Users users);
}
