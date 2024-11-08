package com.example.koi_farm_server.auth.repository;

import com.example.koi_farm_server.auth.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
    boolean existsByUsername(String username);  // Kiểm tra nếu username đã tồn tại
}
