package com.example.koi.service;

import com.example.koi.model.Orders;
import com.example.koi.model.Inventory;
import com.example.koi.repository.InventoryRepository;
import com.example.koi.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DashboardService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private InventoryRepository inventoryRepository;

    // Báo cáo doanh thu (Tính tổng doanh thu từ các đơn hàng)
    public double getTotalRevenue() {
        List<Orders> orders = orderRepository.findAll();
        return orders.stream().mapToDouble(Orders::getTotalAmount).sum();
    }

    // Tồn kho (Hiển thị tất cả các sản phẩm và số lượng)
    public List<Inventory> getInventory() {
        return inventoryRepository.findAll();
    }

    // Đơn hàng (Tính tổng số đơn hàng)
    public long getTotalOrders() {
        return orderRepository.count();
    }
}
