package com.example.koi.service;

import com.example.koi.model.Orders;
import com.example.koi.model.Inventory;
import com.example.koi.repository.InventoryRepository;
import com.example.koi.repository.OrderRepository;
import com.example.koi.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Locale;
import java.time.LocalDate;
import java.time.format.TextStyle;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.time.Month;
import java.util.Date; // Import Date

@Service
public class DashboardService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private InventoryRepository inventoryRepository;

    @Autowired
    private CustomerRepository customerRepository;

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

    // Tính tổng số khách hàng
    public long getTotalCustomers() {
        return customerRepository.count();
    }

    // Tính tổng số sản phẩm
    public long getTotalProducts() {
        return inventoryRepository.count();
    }
    
    // Báo cáo doanh thu theo tháng
    public List<Map<String, Object>> getRevenueByMonth() {
        List<Orders> orders = orderRepository.findAll();

        // Sử dụng Map để nhóm doanh thu theo tháng
        Map<Integer, Double> revenueMap = new HashMap<>();

        for (Orders order : orders) {
            // Kiểm tra xem ngày có hợp lệ không và chuyển Date thành LocalDate nếu cần
            LocalDate orderDate = convertToLocalDateViaInstant(order.getOrderDate());
            
            // Lấy số tháng (1-12)
            int month = orderDate.getMonthValue();
            double revenue = order.getTotalAmount();
            revenueMap.put(month, revenueMap.getOrDefault(month, 0.0) + revenue);
        }

        // Chuyển đổi dữ liệu thành danh sách kết quả (List<Map>)
        List<Map<String, Object>> result = new ArrayList<>();
        for (Map.Entry<Integer, Double> entry : revenueMap.entrySet()) {
            Map<String, Object> data = new HashMap<>();
            data.put("month", Month.of(entry.getKey()).getDisplayName(TextStyle.FULL, Locale.ENGLISH)); // Chuyển số tháng thành tên tháng
            data.put("revenue", entry.getValue());
            result.add(data);
        }

        return result;
    }
    
    // Phương thức chuyển đổi Date sang LocalDate
    private LocalDate convertToLocalDateViaInstant(Date dateToConvert) {
        return dateToConvert.toInstant()
                            .atZone(java.time.ZoneId.systemDefault())
                            .toLocalDate();
    }
}
