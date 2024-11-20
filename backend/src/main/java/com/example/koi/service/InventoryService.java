package com.example.koi.service;

import com.example.koi.model.Inventory;
import com.example.koi.repository.InventoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InventoryService {

    @Autowired
    private InventoryRepository inventoryRepository;

    // Lấy tất cả sản phẩm trong kho
    public List<Inventory> getAllInventory() {
        return inventoryRepository.findAll();
    }
}
