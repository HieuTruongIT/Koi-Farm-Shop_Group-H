import React, { useState } from "react";
import { Typography, Card, Statistic, Space, Table, Row, Col } from "antd";
import { DollarOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined, BarChartOutlined, TrophyOutlined, TeamOutlined } from "@ant-design/icons";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import "./Dashboard.css"; // Import CSS

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Dashboard() {
  const [orders, setOrders] = useState(150);
  const [inventory, setInventory] = useState(200);
  const [customers, setCustomers] = useState(450);
  const [revenue, setRevenue] = useState(35000);
  const [topSellingProducts, setTopSellingProducts] = useState([
    { key: "1", title: "Kohaku Koi", quantity: 50, price: "$200" },
    { key: "2", title: "Showa Koi", quantity: 30, price: "$250" },
  ]);
  const [salesTrends, setSalesTrends] = useState([5000, 6000, 7000, 8000, 7500, 8500, 9000]);
  const [suppliers, setSuppliers] = useState(12);
  const [pendingOrders, setPendingOrders] = useState(20);

  return (
    <div className="dashboard-container">
      <Space className="dashboard-space" size={40} direction="vertical">
        <Typography.Title level={4} className="dashboard-title">Koi Fish Management Dashboard</Typography.Title>
        
        {/* Statistics Row */}
        <Row gutter={16}>
          <Col span={8}>
            <DashboardCard icon={<ShoppingCartOutlined className="dashboard-icon" />} title="Orders" value={orders} />
          </Col>
          <Col span={8}>
            <DashboardCard icon={<ShopOutlined className="dashboard-icon" />} title="Inventory" value={inventory} />
          </Col>
          <Col span={8}>
            <DashboardCard icon={<UserOutlined className="dashboard-icon" />} title="Customers" value={customers} />
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={8}>
            <DashboardCard icon={<DollarOutlined className="dashboard-icon" />} title="Revenue" value={revenue} />
          </Col>
          <Col span={8}>
            <DashboardCard icon={<TrophyOutlined className="dashboard-icon" />} title="Top Selling Products" value={topSellingProducts.length} />
          </Col>
          <Col span={8}>
            <DashboardCard icon={<TeamOutlined className="dashboard-icon" />} title="Suppliers" value={suppliers} />
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <DashboardChart salesTrends={salesTrends} />
          </Col>
          <Col span={12}>
            <RecentOrders topSellingProducts={topSellingProducts} />
          </Col>
        </Row>
      </Space>
    </div>
  );
}

function DashboardCard({ icon, title, value }) {
  return (
    <Card className="dashboard-card">
      <Space direction="horizontal" align="center">
        <div className="icon-container">{icon}</div>
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}

function RecentOrders({ topSellingProducts }) {
  return (
    <div className="recent-orders">
      <Typography.Text>Top Selling Products</Typography.Text>
      <Table
        columns={[
          { title: "Product", dataIndex: "title" },
          { title: "Quantity Sold", dataIndex: "quantity" },
          { title: "Price", dataIndex: "price" },
        ]}
        dataSource={topSellingProducts}
        pagination={false}
      />
    </div>
  );
}

function DashboardChart({ salesTrends }) {
  const options = {
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
      title: { display: true, text: "Sales Trends (Last 6 Months)" },
    },
  };

  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const data = {
    labels,
    datasets: [
      {
        label: "Sales",
        data: salesTrends,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <Card className="chart-card">
      <Bar options={options} data={data} />
    </Card>
  );
}

export default Dashboard;
