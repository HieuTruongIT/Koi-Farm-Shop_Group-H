package com.example.koi_farm_server.auth.service;

import com.example.koi_farm_server.auth.model.User;
import com.example.koi_farm_server.auth.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    public boolean isUsernameTaken(String username) {
        return userRepository.existsByUsername(username);
    }

    public void registerUser(User user) {
        // Mã hóa mật khẩu trước khi lưu vào MongoDB
        String encodedPassword = encodePassword(user.getPassword());
        user.setPassword(encodedPassword);
        userRepository.save(user);
    }

    private String encodePassword(String password) {
        // Dùng BCrypt để mã hóa mật khẩu
        return org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder().encode(password);
    }
}
