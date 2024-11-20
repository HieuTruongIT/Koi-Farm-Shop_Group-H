package com.example.koi.controller;

import com.example.koi.model.Inventory;  
import com.example.koi.service.DashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;  

import java.util.Map;
@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    @Autowired
    private DashboardService dashboardService;

    // Báo cáo doanh thu
    @GetMapping("/revenue")
    public double getRevenue() {
        return dashboardService.getTotalRevenue();
    }

    // Báo cáo tồn kho
    @GetMapping("/inventory")
    public List<Inventory> getInventory() {
        return dashboardService.getInventory();
    }

    // Báo cáo tổng số đơn hàng
    @GetMapping("/orders")
    public long getTotalOrders() {
        return dashboardService.getTotalOrders();
    }

    // Báo cáo doanh thu theo tháng
    @GetMapping("/revenueByMonth")
    public List<Map<String, Object>> getRevenueByMonth() {
        return dashboardService.getRevenueByMonth();
    }
}
