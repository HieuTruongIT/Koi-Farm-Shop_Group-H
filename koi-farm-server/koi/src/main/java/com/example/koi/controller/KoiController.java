package com.example.koi.controller;

import com.example.koi.model.Koi;
import com.example.koi.service.KoiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/koi")
public class KoiController {

    @Autowired
    private KoiService koiService;

    @GetMapping
    public List<Koi> getAllKoi() {
        return koiService.getAllKoi();
    }

    @PostMapping
    public Koi createKoi(@RequestBody Koi koi) {
        return koiService.saveKoi(koi);
    }
}