package com.example.koi.repository;

import com.example.koi.model.Koi;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface KoiRepository extends MongoRepository<Koi, String> {
}
