package com.example.koi.controller;

import com.example.koi.model.Promotion;
import com.example.koi.service.PromotionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/promotions")
@CrossOrigin(origins = "http://localhost:3000") // CORS cho React
public class PromotionController {
    @Autowired
    private PromotionService service;

    // Lấy danh sách tất cả khuyến mãi
    @GetMapping
    public List<Promotion> getAllPromotions() {
        return service.getAllPromotions();
    }

    // Thêm khuyến mãi mới
    @PostMapping
    public Promotion addPromotion(@RequestBody Promotion promotion) {
        return service.addPromotion(promotion);
    }

    // Xóa khuyến mãi theo ID
    @DeleteMapping("/{id}")
    public void deletePromotion(@PathVariable String id) {
        service.deletePromotion(id);
    }
}
