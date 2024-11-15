package com.example.koi.service;

import com.example.koi.model.Koi;
import com.example.koi.repository.KoiRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class KoiService {
    @Autowired
    private KoiRepository koiRepository;

    public List<Koi> getAllKoi() {
        return koiRepository.findAll();
    }

    public Koi saveKoi(Koi koi) {
        return koiRepository.save(koi);
    }
}
