package com.example.koi.service;

import com.example.koi.model.Promotion;
import com.example.koi.repository.PromotionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PromotionService {
    @Autowired
    private PromotionRepository repository;

    public List<Promotion> getAllPromotions() {
        return repository.findAll();
    }

    public Promotion addPromotion(Promotion promotion) {
        return repository.save(promotion);
    }

    public void deletePromotion(String id) {
        repository.deleteById(id);
    }
}
