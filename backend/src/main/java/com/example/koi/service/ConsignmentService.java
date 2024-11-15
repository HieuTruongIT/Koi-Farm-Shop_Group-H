package com.example.koi.service;

import com.example.koi.model.Consignment;
import com.example.koi.repository.ConsignmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConsignmentService {
    @Autowired
    private ConsignmentRepository consignmentRepository;

    public List<Consignment> getAllConsignments() {
        return consignmentRepository.findAll();
    }

    public Consignment saveConsignment(Consignment consignment) {
        return consignmentRepository.save(consignment);
    }
}
