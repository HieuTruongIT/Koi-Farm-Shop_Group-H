import { Table, Typography, Space, Button, Tag, Input, Select, Modal, Form, InputNumber } from "antd";
import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import './Orders.css';

// Sample data with more features
const initialData = [
    {
      key: "1",
      tênCá: "Showa Sanshoku",
      loạiCá: "Thuần Chủng F1",
      tuổi: "2 years",
      kíchThước: "25 cm",
      giá: "500,000 VND",
      ảnh: "link_to_image",  // Image placeholder
      môTả: "A beautiful Showa Sanshoku with a distinct black pattern.",
      trạngThái: "In Stock",
    },
    {
      key: "2",
      tênCá: "Sanke",
      loạiCá: "Thuần Chủng F1",
      tuổi: "1 year",
      kíchThước: "20 cm",
      giá: "400,000 VND",
      ảnh: "link_to_image",  // Image placeholder
      môTả: "Sanke with an excellent combination of red, white, and black colors.",
      trạngThái: "In Stock",
    },
    {
      key: "3",
      tênCá: "Kohaku",
      loạiCá: "Thuần Chủng F1",
      tuổi: "3 years",
      kíchThước: "30 cm",
      giá: "700,000 VND",
      ảnh: "link_to_image", // Image placeholder
      môTả: "A classic Kohaku with a brilliant red and white pattern.",
      trạngThái: "Out of Stock",
    },
    {
      key: "4",
      tênCá: "Shiro Utsuri",
      loạiCá: "Thuần Chủng F1",
      tuổi: "2 years",
      kíchThước: "28 cm",
      giá: "550,000 VND",
      ảnh: "link_to_image",
      môTả: "A Shiro Utsuri with a bold black and white contrast.",
      trạngThái: "In Stock",
    },
    {
      key: "5",
      tênCá: "Kikusui",
      loạiCá: "Thuần Chủng F1",
      tuổi: "1 year",
      kíchThước: "22 cm",
      giá: "450,000 VND",
      ảnh: "link_to_image",
      môTả: "A stunning Kikusui with a bright orange hue.",
      trạngThái: "In Stock",
    },
    {
      key: "6",
      tênCá: "Tancho Kohaku",
      loạiCá: "Thuần Chủng F1",
      tuổi: "2 years",
      kíchThước: "24 cm",
      giá: "600,000 VND",
      ảnh: "link_to_image",
      môTả: "A beautiful Tancho Kohaku with a red spot on its head.",
      trạngThái: "In Stock",
    },
    {
      key: "7",
      tênCá: "Gin Rin Showa",
      loạiCá: "Thuần Chủng F1",
      tuổi: "1 year",
      kíchThước: "18 cm",
      giá: "350,000 VND",
      ảnh: "link_to_image",
      môTả: "A Gin Rin Showa with sparkling scales and vibrant colors.",
      trạngThái: "Out of Stock",
    },
    {
      key: "8",
      tênCá: "Asagi",
      loạiCá: "Thuần Chủng F1",
      tuổi: "2 years",
      kíchThước: "26 cm",
      giá: "500,000 VND",
      ảnh: "link_to_image",
      môTả: "A classic Asagi with a blueish-gray pattern.",
      trạngThái: "In Stock",
    },
    {
      key: "9",
      tênCá: "Utsuri",
      loạiCá: "Thuần Chủng F1",
      tuổi: "3 years",
      kíchThước: "30 cm",
      giá: "650,000 VND",
      ảnh: "link_to_image",
      môTả: "A striking Utsuri with black and white contrasts.",
      trạngThái: "In Stock",
    },
    {
      key: "10",
      tênCá: "Goshiki",
      loạiCá: "Thuần Chủng F1",
      tuổi: "2 years",
      kíchThước: "25 cm",
      giá: "500,000 VND",
      ảnh: "link_to_image",
      môTả: "A multi-colored Goshiki with hints of blue and red.",
      trạngThái: "In Stock",
    },
  
    // Lai Tạo
    {
      key: "11",
      tênCá: "Kohaku",
      loạiCá: "Lai Tạo",
      tuổi: "3 years",
      kíchThước: "30 cm",
      giá: "700,000 VND",
      ảnh: "link_to_image",
      môTả: "A hybrid Kohaku with a blend of red and white patterns.",
      trạngThái: "Out of Stock",
    },
    {
      key: "12",
      tênCá: "Koi Calico",
      loạiCá: "Lai Tạo",
      tuổi: "2 years",
      kíchThước: "25 cm",
      giá: "500,000 VND",
      ảnh: "link_to_image",
      môTả: "A hybrid Koi Calico with a variety of colors.",
      trạngThái: "In Stock",
    },
    {
      key: "13",
      tênCá: "Platinum Ogon",
      loạiCá: "Lai Tạo",
      tuổi: "1 year",
      kíchThước: "22 cm",
      giá: "450,000 VND",
      ảnh: "link_to_image",
      môTả: "A Platinum Ogon with a shimmering silver body.",
      trạngThái: "In Stock",
    },
    {
      key: "14",
      tênCá: "Gin Rin Matsuba",
      loạiCá: "Lai Tạo",
      tuổi: "3 years",
      kíchThước: "28 cm",
      giá: "550,000 VND",
      ảnh: "link_to_image",
      môTả: "A Gin Rin Matsuba with a beautiful golden pattern.",
      trạngThái: "Out of Stock",
    },
    {
      key: "15",
      tênCá: "Shusui",
      loạiCá: "Lai Tạo",
      tuổi: "2 years",
      kíchThước: "27 cm",
      giá: "600,000 VND",
      ảnh: "link_to_image",
      môTả: "A Shusui with a unique blue and silver appearance.",
      trạngThái: "In Stock",
    },
    {
      key: "16",
      tênCá: "Chagoi",
      loạiCá: "Lai Tạo",
      tuổi: "1 year",
      kíchThước: "23 cm",
      giá: "400,000 VND",
      ảnh: "link_to_image",
      môTả: "A Chagoi with a calm and friendly personality.",
      trạngThái: "In Stock",
    },
    {
      key: "17",
      tênCá: "Kumonryu",
      loạiCá: "Lai Tạo",
      tuổi: "2 years",
      kíchThước: "26 cm",
      giá: "500,000 VND",
      ảnh: "link_to_image",
      môTả: "A Kumonryu with contrasting black and white pattern.",
      trạngThái: "In Stock",
    },
    {
      key: "18",
      tênCá: "Budo Goromo",
      loạiCá: "Lai Tạo",
      tuổi: "2 years",
      kíchThước: "24 cm",
      giá: "450,000 VND",
      ảnh: "link_to_image",
      môTả: "A Budo Goromo with beautiful red and white scales.",
      trạngThái: "Out of Stock",
    },
    {
      key: "19",
      tênCá: "Ogon",
      loạiCá: "Lai Tạo",
      tuổi: "1 year",
      kíchThước: "21 cm",
      giá: "350,000 VND",
      // ảnh: "link_to_image",
      môTả: "A shiny golden Ogon with a bright metallic sheen.",
      trạngThái: "In Stock",
    },
    {
      key: "20",
      tênCá: "Doitsu",
      loạiCá: "Lai Tạo",
      tuổi: "2 years",
      kíchThước: "26 cm",
      giá: "500,000 VND",
      ảnh: "link_to_image",
      môTả: "A Doitsu Koi with a unique scale-less body.",
      trạngThái: "In Stock",
    },
];

const fishTypes = ["Thuần Chủng F1", "Lai Tạo"];
const statusOptions = ["In Stock", "Out of Stock"];

function Orders() {
  const [data, setData] = useState(initialData); // Store fish data
  const [isEditModalVisible, setIsEditModalVisible] = useState(false); // Edit modal visibility
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false); // Delete modal visibility
  const [currentFish, setCurrentFish] = useState(null); // Store the fish currently being edited or deleted

  // Handle Edit Modal visibility and set current fish
  const handleEditClick = (record) => {
    setCurrentFish(record);
    setIsEditModalVisible(true);
  };

  // Handle Delete Modal visibility and set current fish
  const handleDeleteClick = (record) => {
    setCurrentFish(record);
    setIsDeleteModalVisible(true);
  };

  // Handle editing the fish data
  const handleEditOk = () => {
    setData(data.map((item) =>
      item.key === currentFish.key ? { ...currentFish } : item
    ));
    setIsEditModalVisible(false);
  };

  // Handle deleting the fish data
  const handleDeleteOk = () => {
    setData(data.filter((item) => item.key !== currentFish.key));
    setIsDeleteModalVisible(false);
  };

  // Handle form change
  const handleInputChange = (field, value) => {
    setCurrentFish({ ...currentFish, [field]: value });
  };

  return (
    <Space size={30} direction="vertical" style={{ width: "100%" }}>
      <Typography.Title level={4}>Orders</Typography.Title>

      {/* Filters */}
      <Space style={{ marginBottom: 16 }}>
        <Input
          placeholder="Search Fish"
          prefix={<SearchOutlined />}
          style={{ width: 200 }}
        />
        <Select
          placeholder="Filter by Type"
          style={{ width: 200 }}
          options={fishTypes.map((type) => ({ label: type, value: type }))}
        />
        <Select
          placeholder="Filter by Status"
          style={{ width: 200 }}
          options={statusOptions.map((status) => ({ label: status, value: status }))}
        />
        <Button type="primary">Apply Filters</Button>
      </Space>

      {/* Table */}
      <Table
        dataSource={data}
        columns={[
          {
            title: "Tên Cá",
            dataIndex: "tênCá",
            key: "tênCá",
            render: (text, record) => (
              <Space size="middle">
                <img src={record.ảnh} alt={text} style={{ width: 40, height: 40 }} />
                <span>{text}</span>
              </Space>
            ),
          },
          {
            title: "Loại Cá",
            dataIndex: "loạiCá",
            key: "loạiCá",
            render: (type) => <Tag color={type === "Thuần Chủng F1" ? "green" : "blue"}>{type}</Tag>,
          },
          {
            title: "Tuổi",
            dataIndex: "tuổi",
            key: "tuổi",
          },
          {
            title: "Kích Thước",
            dataIndex: "kíchThước",
            key: "kíchThước",
          },
          {
            title: "Giá",
            dataIndex: "giá",
            key: "giá",
          },
          {
            title: "Trạng Thái",
            dataIndex: "trạngThái",
            key: "trạngThái",
            render: (status) => (
              <Tag color={status === "In Stock" ? "green" : "red"}>{status}</Tag>
            ),
          },
          {
            title: "Mô Tả",
            dataIndex: "môTả",
            key: "môTả",
            render: (text) => <span>{text}</span>,
          },
          {
            title: "Actions",
            key: "actions",
            render: (text, record) => (
              <Space size="middle">
                <Button type="link" onClick={() => handleEditClick(record)}>Edit</Button>
                <Button type="link" danger onClick={() => handleDeleteClick(record)}>Delete</Button>
              </Space>
            ),
          },
        ]}
        pagination={{
          pageSize: 8, // Pagination with 8 items per page
        }}
        scroll={{ x: "max-content" }} // To allow horizontal scrolling if content overflows
      />

      {/* Edit Modal */}
      <Modal
        title="Edit Fish"
        visible={isEditModalVisible}
        onOk={handleEditOk}
        onCancel={() => setIsEditModalVisible(false)}
      >
        <Form layout="vertical">
          <Form.Item label="Tên Cá">
            <Input
              value={currentFish?.tênCá}
              onChange={(e) => handleInputChange("tênCá", e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Loại Cá">
            <Select
              value={currentFish?.loạiCá}
              onChange={(value) => handleInputChange("loạiCá", value)}
            >
              {fishTypes.map((type) => (
                <Select.Option key={type} value={type}>{type}</Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Tuổi">
            <Input
              value={currentFish?.tuổi}
              onChange={(e) => handleInputChange("tuổi", e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Kích Thước">
            <Input
              value={currentFish?.kíchThước}
              onChange={(e) => handleInputChange("kíchThước", e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Giá">
            <Input
              value={currentFish?.giá}
              onChange={(e) => handleInputChange("giá", e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Mô Tả">
            <Input
              value={currentFish?.môTả}
              onChange={(e) => handleInputChange("môTả", e.target.value)}
            />
          </Form.Item>
        </Form>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        title="Confirm Deletion"
        visible={isDeleteModalVisible}
        onOk={handleDeleteOk}
        onCancel={() => setIsDeleteModalVisible(false)}
        okText="Delete"
        cancelText="Cancel"
      >
        <p>Are you sure you want to delete this fish?</p>
      </Modal>
    </Space>
  );
}

export default Orders; 