package com.example.koi.controller;

import com.example.koi.model.Inventory;  // Đảm bảo bạn import đúng Inventory model
import com.example.koi.service.DashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;  // Import List từ java.util

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    @Autowired
    private DashboardService dashboardService;

    // báo cáo doanh thu
    @GetMapping("/revenue")
    public double getRevenue() {
        return dashboardService.getTotalRevenue();
    }

    // báo cáo tồn kho
    @GetMapping("/inventory")
    public List<Inventory> getInventory() {
        return dashboardService.getInventory();
    }

    // báo cáo tổng số đơn hàng
    @GetMapping("/orders")
    public long getTotalOrders() {
        return dashboardService.getTotalOrders();
    }
}
