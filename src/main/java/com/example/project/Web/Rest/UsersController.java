package com.example.project.Web.Rest;

import com.example.project.Model.Exeptions.InvalidUserIdExeption;
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
    public List<Users> listAll() {
        return this.usersService.listAllUsers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Users> findById(@PathVariable String id) {
        return this.usersService.findByUsername(id)
                .map(product -> ResponseEntity.ok().body(product))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/add")
    public ResponseEntity<Users> addUser(@RequestBody Users users) {

        return this.usersService.ceate(users)
                .map(user -> ResponseEntity.ok().body(user))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/edit")
    public ResponseEntity<Users> editUser(@RequestBody Users users) {
        return this.usersService.edit(users)
                .map(user -> ResponseEntity.ok().body(user))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/changeRole/{username}")
    public ResponseEntity changeRole(@PathVariable String username) {
        Users before = this.usersService.findByUsername(username).orElseThrow(InvalidUserIdExeption::new);
        this.usersService.changeRole(username);
        Users after = this.usersService.findByUsername(username).orElseThrow(InvalidUserIdExeption::new);
        if (before.getUserType() == after.getUserType()) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/delete/{username}")
    public ResponseEntity delete(@PathVariable String username) {
        this.usersService.deleteWithUsername(username);
        if (this.usersService.findByUsername(username).isEmpty()) {
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.badRequest().build();
    }
}
