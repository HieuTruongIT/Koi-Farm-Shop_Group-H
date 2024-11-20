import React, { useEffect, useState } from "react";
import { Typography, Card, Statistic, Space, Table } from "antd";
import { DollarOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Dashboard() {
  
  const [orders, setOrders] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [revenueByMonth, setRevenueByMonth] = useState([]); 

 
  useEffect(() => {
    const fetchData = async () => {
      try {
       
        const [
          revenueResponse,
          inventoryResponse,
          ordersResponse,
          customersResponse,
          revenueByMonthResponse
        ] = await Promise.all([
          axios.get("http://localhost:8080/api/dashboard/revenue"),  
          axios.get("http://localhost:8080/api/dashboard/inventory"), 
          axios.get("http://localhost:8080/api/dashboard/orders"),   
          axios.get("http://localhost:8080/api/dashboard/customers"), 
          axios.get("http://localhost:8080/api/dashboard/revenueByMonth") 
        ]);

        
        setRevenue(revenueResponse.data); 
        setInventory(inventoryResponse.data.length); 
        setOrders(ordersResponse.data); 
        setCustomers(customersResponse.data); 
        setRevenueByMonth(revenueByMonthResponse.data); 
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu từ API:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Space size={40} direction="vertical">
        <Typography.Title level={4}>Dashboard</Typography.Title>

        
        <Space direction="horizontal">
          <DashboardCard
            icon={<ShoppingCartOutlined style={iconStyle("green", "#66FF66")} />}
            title="Orders"
            value={orders}
          />
          <DashboardCard
            icon={<ShopOutlined style={iconStyle("#FF99FF", "#FFCCFF")} />}
            title="Inventory"
            value={inventory}
          />
          <DashboardCard
            icon={<UserOutlined style={iconStyle("blue", "#66CCFF")} />}
            title="Customers"
            value={customers}
          />
          <DashboardCard
            icon={<DollarOutlined style={iconStyle("red", "#FF6666")} />}
            title="Revenue"
            value={revenue}
          />
        </Space>

        
        <Space direction="horizontal">
          <Space>
            <RecentOrders data={revenueByMonth} /> 
          </Space>
          <Space>
            <DashboardChart revenueByMonth={revenueByMonth} />
          </Space>
        </Space>
      </Space>
    </div>
  );
}


function DashboardCard({ icon, title, value }) {
  return (
    <Card style={{ width: 250, height: 150 }}>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}


function RecentOrders({ data }) {
  return (
    <>
      <Typography.Text>Doanh thu theo tháng</Typography.Text>
      <Table
        dataSource={data}
        columns={[
          {
            title: "Month",
            dataIndex: "month",
            key: "month",
          },
          {
            title: "Revenue",
            dataIndex: "revenue",
            key: "revenue",
          },
        ]}
        rowKey="month"
      />
    </>
  );
}


function DashboardChart({ revenueByMonth }) {
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Doanh thu theo tháng",
      },
      legend: {
        position: "bottom",
      },
    },
  };

  const labels = revenueByMonth.map(item => item.month); 
  const data = {
    labels,
    datasets: [
      {
        label: "Doanh thu",
        data: revenueByMonth.map(item => item.revenue), 
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <Card style={{ width: 600, height: 350 }}>
      <Bar options={options} data={data} />
    </Card>
  );
}


const iconStyle = (color, bgColor) => ({
  color: color,
  backgroundColor: bgColor,
  borderRadius: 16,
  fontSize: 24,
  padding: 8,
});

export default Dashboard;
