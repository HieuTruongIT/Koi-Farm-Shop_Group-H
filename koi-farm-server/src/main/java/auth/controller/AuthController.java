package com.example.koi_farm_server.auth.controller;

import com.example.koi_farm_server.auth.model.User;
import com.example.koi_farm_server.auth.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user) {
        try {
            // Kiểm tra nếu user đã tồn tại
            if (authService.isUsernameTaken(user.getUsername())) {
                return ResponseEntity.badRequest().body("Username is already taken");
            }
            // Gọi service để lưu user
            authService.registerUser(user);
            return ResponseEntity.ok("User registered successfully");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error occurred while registering");
        }
    }
}
