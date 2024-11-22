package com.example.koi.repository;

import com.example.koi.model.Consignment;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ConsignmentRepository extends MongoRepository<Consignment, String> {
}