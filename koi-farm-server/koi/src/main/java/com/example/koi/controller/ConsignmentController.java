package com.example.koi.controller;

import com.example.koi.model.Consignment;
import com.example.koi.service.ConsignmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/consignment")
public class ConsignmentController {

    @Autowired
    private ConsignmentService consignmentService;

    @GetMapping
    public List<Consignment> getAllConsignments() {
        return consignmentService.getAllConsignments();
    }

    @PostMapping
    public Consignment createConsignment(@RequestBody Consignment consignment) {
        return consignmentService.saveConsignment(consignment);
    }
}