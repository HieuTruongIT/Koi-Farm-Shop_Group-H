import { Space, Typography, Table, Input, Button, Modal, Form, InputNumber, Select, Tag } from "antd";
import { useState } from "react";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import "./Inventory.css"; // Import CSS

function Inventory() {
  const [inventoryData, setInventoryData] = useState([
    {
      key: "1",
      id: "KF001",
      name: "kitashi Koi",
      species: "Koi",
      age: 2,
      size: "Medium",
      service: "Vaccinated",
      price: "$200",
      origin: "Japan",
      stock: 50,
      supplier: "Koi Suppliers Inc.",
      healthStatus: "Healthy",
      dateAdded: "2023-10-15",
    },
    {
      key: "2",
      id: "KF002",
      name: "Shina Koi",
      species: "Koi",
      age: 3,
      size: "Large",
      service: "Cleaned",
      price: "$250",
      origin: "China",
      stock: 30,
      supplier: "Fish World Ltd.",
      healthStatus: "Healthy",
      dateAdded: "2023-09-10",
    },
    {
      "key": "3",
      "id": "KF003",
      "name": "Sanke Koi",
      "species": "Koi",
      "age": 4,
      "size": "Large",
      "service": "Vaccinated",
      "price": "$300",
      "origin": "Japan",
      "stock": 40,
      "supplier": "Koi Masters Co.",
      "healthStatus": "Healthy",
      "dateAdded": "2023-08-25"
    },
    {
      "key": "4",
      "id": "KF004",
      "name": "Utsuri Koi",
      "species": "Koi",
      "age": 1,
      "size": "Small",
      "service": "Cleaned",
      "price": "$150",
      "origin": "Taiwan",
      "stock": 60,
      "supplier": "Fish World Ltd.",
      "healthStatus": "Healthy",
      "dateAdded": "2023-11-01"
    },
    {
      "key": "5",
      "id": "KF005",
      "name": "Shiro Utsuri Koi",
      "species": "Koi",
      "age": 5,
      "size": "Medium",
      "service": "Vaccinated",
      "price": "$350",
      "origin": "Japan",
      "stock": 20,
      "supplier": "Koi Suppliers Inc.",
      "healthStatus": "Healthy",
      "dateAdded": "2023-07-12"
    }    
    // More inventory entries can be added here...
  ]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  // Filter data based on search
  const filteredData = inventoryData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = (values) => {
    setInventoryData([
      ...inventoryData,
      {
        key: inventoryData.length + 1,
        id: `KF00${inventoryData.length + 1}`,
        name: values.name,
        species: values.species,
        age: values.age,
        size: values.size,
        service: values.service,
        price: `$${values.price}`,
        origin: values.origin,
        stock: values.stock,
        supplier: values.supplier,
        healthStatus: values.healthStatus,
        dateAdded: new Date().toISOString().split("T")[0],
      },
    ]);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Space size={30} direction="vertical" className="inventory-container">
      <Typography.Title level={4} className="inventory-title">Inventory Management</Typography.Title>
      
      {/* Search and Add Fish */}
      <Space direction="horizontal" size={16} style={{ marginBottom: "20px" }}>
        <Input
          placeholder="Search Fish"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          style={{ width: 250 }}
        />
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={showModal}
        >
          Add New Fish
        </Button>
      </Space>
      
      {/* Inventory Table */}
      <Table
        columns={[
          { title: "Fish ID", dataIndex: "id" },
          { title: "Fish Name", dataIndex: "name" },
          { title: "Species", dataIndex: "species" },
          { title: "Age (Years)", dataIndex: "age" },
          { title: "Size", dataIndex: "size" },
          { title: "Service", dataIndex: "service" },
          { title: "Price", dataIndex: "price" },
          { title: "Origin", dataIndex: "origin" },
          { title: "Stock Quantity", dataIndex: "stock" },
          { title: "Supplier", dataIndex: "supplier" },
          {
            title: "Health Status", 
            dataIndex: "healthStatus",
            render: (healthStatus) => (
              <Tag color={healthStatus === "Healthy" ? "green" : "red"}>{healthStatus}</Tag>
            )
          },
          { title: "Date Added", dataIndex: "dateAdded" },
        ]}
        dataSource={filteredData}
        pagination={{ pageSize: 10 }}
        rowClassName="inventory-row"
        bordered
        scroll={{ x: "max-content" }} // Horizontal scroll for large tables
      />

      {/* Modal for Adding New Fish */}
      <Modal
        title="Add New Fish"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Add"
        cancelText="Cancel"
      >
        <Form layout="vertical" onFinish={handleOk}>
          <Form.Item label="Fish Name" name="name" rules={[{ required: true, message: "Please enter the fish name" }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Species" name="species" rules={[{ required: true, message: "Please enter the species" }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Age (Years)" name="age" rules={[{ required: true, message: "Please enter the age" }]}>
            <InputNumber min={1} />
          </Form.Item>
          <Form.Item label="Size" name="size" rules={[{ required: true, message: "Please enter the size" }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Service" name="service" rules={[{ required: true, message: "Please enter the service type" }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Price" name="price" rules={[{ required: true, message: "Please enter the price" }]}>
            <InputNumber min={1} />
          </Form.Item>
          <Form.Item label="Origin" name="origin" rules={[{ required: true, message: "Please enter the origin" }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Stock Quantity" name="stock" rules={[{ required: true, message: "Please enter the stock quantity" }]}>
            <InputNumber min={1} />
          </Form.Item>
          <Form.Item label="Supplier" name="supplier" rules={[{ required: true, message: "Please enter the supplier" }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Health Status" name="healthStatus" rules={[{ required: true, message: "Please select the health status" }]}>
            <Select>
              <Select.Option value="Healthy">Healthy</Select.Option>
              <Select.Option value="Unhealthy">Unhealthy</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </Space>
  );
}

export default Inventory;
