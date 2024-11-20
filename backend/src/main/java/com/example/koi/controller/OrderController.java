package com.example.koi.controller;

import com.example.koi.model.Orders;
import com.example.koi.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    // Lấy tất cả đơn hàng
    @GetMapping
    public List<Orders> getAllOrders() {
        return orderService.getAllOrders();
    }


    
}