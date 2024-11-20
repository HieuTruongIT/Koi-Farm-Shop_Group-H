import React, { useEffect, useState } from "react";
import { Table, Typography, Space } from "antd";
import axios from "axios";

function Orders() {
  const [orders, setOrders] = useState([]); 
  const [loading, setLoading] = useState(true); 

  
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/orders"); 
        setOrders(response.data); 
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchOrders(); 
  }, []);

  
  const formatOrderDate = (date) => {
    const orderDate = new Date(date);
    return orderDate.toLocaleDateString(); 
  };

  return (
    <Space size={30} direction="vertical">
      <Typography.Title level={4}>Orders</Typography.Title>
      <Table
        loading={loading} 
        dataSource={orders} 
        columns={[
          {
            title: "Order ID",
            dataIndex: "id", 
            key: "id",
          },
          {
            title: "Customer ID",
            dataIndex: "customerId", 
            key: "customerId",
          },
          {
            title: "Order Date",
            dataIndex: "orderDate", 
            key: "orderDate",
            render: (text) => formatOrderDate(text), 
          },
          {
            title: "Total Amount",
            dataIndex: "totalAmount", 
            key: "totalAmount",
            render: (text) => `$${text.toFixed(2)}`, 
          },
          {
            title: "Status",
            dataIndex: "status", 
            key: "status",
          },
        ]}
        rowKey="id" 
      />
    </Space>
  );
}

export default Orders;
