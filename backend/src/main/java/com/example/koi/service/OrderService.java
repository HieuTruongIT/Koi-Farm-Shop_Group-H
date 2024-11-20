package com.example.koi.service;

import com.example.koi.model.Orders;
import com.example.koi.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    // Lấy tất cả đơn hàng
    public List<Orders> getAllOrders() {
        return orderRepository.findAll();
    }}