package com.example.koi.repository;

import com.example.koi.model.Promotion;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PromotionRepository extends MongoRepository<Promotion, String> {
}