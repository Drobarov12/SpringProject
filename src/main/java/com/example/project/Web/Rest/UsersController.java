package com.example.project.Web.Rest;

import com.example.project.Model.Users;
import com.example.project.Service.UsersService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/users")
public class UsersController {
    private final UsersService usersService;

    public UsersController(UsersService usersService) {
        this.usersService = usersService;
    }

    @GetMapping
    public List<Users> listAll(){
        return this.usersService.listAllUsers();
    }

    @DeleteMapping("/delete/{username}")
    public ResponseEntity delete(@PathVariable String username){
        this.usersService.deleteWithUsername(username);
        if(this.usersService.findByUsername(username).isEmpty()){
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.badRequest().build();
    }
}
