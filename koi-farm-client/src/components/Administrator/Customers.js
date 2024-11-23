import React, { useState } from 'react';
import { Table, Typography, Space, Input, Button, Select, Tag, Modal, Form, Input as AntInput } from 'antd';
import { SearchOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import './Customers.css';

function Customers() {
  const initialCustomerData = [
    { id: 1, name: 'Nguyen Minh', email: 'minh.nguyen@gmail.com', phone: '0901234567', address: '123 Hoang Hoa Tham, Hanoi', points: 150 },
    { id: 2, name: 'Tran Thi Mai', email: 'mai.tran@gmail.com', phone: '0902345678', address: '45 Le Lai, Ho Chi Minh City', points: 200 },
    { id: 3, name: 'Le Anh Duy', email: 'duy.le@gmail.com', phone: '0903456789', address: '8 Nguyen Trai, Da Nang', points: 50 },
    { id: 4, name: 'Pham Minh Tuan', email: 'tuan.pham@gmail.com', phone: '0904567890', address: '15 Ba Trieu, Hanoi', points: 120 },
    { id: 5, name: 'Nguyen Hoang Nam', email: 'nam.nguyen@gmail.com', phone: '0905678901', address: '25 Nguyen Thi Minh Khai, HCMC', points: 1050 },
    { id: 6, name: 'Hoang Thanh Son', email: 'son.hoang@gmail.com', phone: '0906789012', address: '12 Hai Ba Trung, Hanoi', points: 850 },
    { id: 7, name: 'Pham Minh Hoang', email: 'hoang.pham@gmail.com', phone: '0907890123', address: '23 Nguyen Hue, HCMC', points: 950 },
    { id: 8, name: 'Bui Thuy Trang', email: 'trang.bui@gmail.com', phone: '0908901234', address: '34 Le Duan, Da Nang', points: 1050 },
    { id: 9, name: 'Nguyen Thi Mai', email: 'mai.nguyen@gmail.com', phone: '0909012345', address: '45 Nguyen Thi Minh Khai, HCMC', points: 300 },
    { id: 10, name: 'Nguyen Thanh Phong', email: 'phong.nguyen@gmail.com', phone: '0901122334', address: '56 Le Lai, Hanoi', points: 200 },
    { id: 11, name: 'Le Minh Tuan', email: 'tuan.le@gmail.com', phone: '0902233445', address: '67 Ba Trieu, Da Nang', points: 500 },
    { id: 12, name: 'Nguyen Thanh Son', email: 'son.nguyen@gmail.com', phone: '0903344556', address: '78 Nguyen Hue, HCMC', points: 1100 },
    { id: 13, name: 'Pham Minh Thu', email: 'thu.pham@gmail.com', phone: '0904455667', address: '89 Hai Ba Trung, Hanoi', points: 1000 },
    { id: 14, name: 'Truong Anh Tuan', email: 'tuan.truong@gmail.com', phone: '0905566778', address: '91 Le Duan, HCMC', points: 800 },
    { id: 15, name: 'Hoang Minh Khai', email: 'khai.hoang@gmail.com', phone: '0906677889', address: '102 Nguyen Thi Minh Khai, Da Nang', points: 400 },
    { id: 16, name: 'Le Hoang Long', email: 'long.le@gmail.com', phone: '0907788990', address: '113 Ba Trieu, Hanoi', points: 950 },
    { id: 17, name: 'Bui Minh Phuong', email: 'phuong.bui@gmail.com', phone: '0908899001', address: '124 Le Lai, HCMC', points: 200 },
    { id: 18, name: 'Truong Thi Lan', email: 'lan.truong@gmail.com', phone: '0909900112', address: '135 Nguyen Hue, Da Nang', points: 600 },
    { id: 19, name: 'Nguyen Minh Hoang', email: 'hoang.nguyen@gmail.com', phone: '0901012132', address: '146 Hai Ba Trung, Hanoi', points: 950 },
    { id: 20, name: 'Pham Thi Mai', email: 'mai.pham@gmail.com', phone: '0902123243', address: '157 Nguyen Thi Minh Khai, HCMC', points: 400 },
    { id: 21, name: 'Le Minh Mai', email: 'mai.le@gmail.com', phone: '0903234354', address: '168 Ba Trieu, Da Nang', points: 700 },
    { id: 22, name: 'Nguyen Thi Bao', email: 'bao.nguyen@gmail.com', phone: '0904345465', address: '179 Nguyen Hue, HCMC', points: 850 },
    { id: 23, name: 'Truong Minh Anh', email: 'anh.truong@gmail.com', phone: '0905456576', address: '180 Le Duan, Hanoi', points: 300 },
    { id: 24, name: 'Bui Thi Lan', email: 'lan.bui@gmail.com', phone: '0906567687', address: '191 Ba Trieu, Da Nang', points: 1050 },
    { id: 25, name: 'Nguyen Minh Bao', email: 'bao.nguyen@gmail.com', phone: '0907678798', address: '202 Hai Ba Trung, HCMC', points: 750 },
    { id: 26, name: 'Truong Thi Mai', email: 'mai.truong@gmail.com', phone: '0908789899', address: '213 Nguyen Thi Minh Khai, Da Nang', points: 450 },
    { id: 27, name: 'Pham Anh Duy', email: 'duy.pham@gmail.com', phone: '0909891000', address: '224 Nguyen Hue, Hanoi', points: 1100 },
    { id: 28, name: 'Bui Minh Lan', email: 'lan.bui@gmail.com', phone: '0901011100', address: '235 Le Duan, HCMC', points: 300 },
    { id: 29, name: 'Nguyen Thi Bao', email: 'bao.nguyen@gmail.com', phone: '0902121212', address: '246 Ba Trieu, Da Nang', points: 950 },
    { id: 30, name: 'Truong Minh Thu', email: 'thu.truong@gmail.com', phone: '0903232323', address: '257 Hai Ba Trung, Hanoi', points: 150 },
    { id: 31, name: 'Pham Minh Thanh', email: 'thanh.pham@gmail.com', phone: '0904343434', address: '268 Nguyen Thi Minh Khai, HCMC', points: 200 },
    { id: 32, name: 'Le Thi Mai', email: 'mai.le@gmail.com', phone: '0905454545', address: '279 Ba Trieu, Da Nang', points: 1000 },
    { id: 33, name: 'Bui Anh Tuan', email: 'tuan.bui@gmail.com', phone: '0906565656', address: '280 Le Duan, Hanoi', points: 1100 },
    { id: 34, name: 'Nguyen Thi Lan', email: 'lan.nguyen@gmail.com', phone: '0907676767', address: '291 Nguyen Hue, HCMC', points: 600 },
    { id: 35, name: 'Pham Thi Bao', email: 'bao.pham@gmail.com', phone: '0908787878', address: '302 Hai Ba Trung, Da Nang', points: 400 },
    { id: 36, name: 'Le Anh Thu', email: 'thu.le@gmail.com', phone: '0909898989', address: '313 Ba Trieu, Hanoi', points: 950 },
    { id: 37, name: 'Nguyen Minh Tuan', email: 'tuan.nguyen@gmail.com', phone: '0901010101', address: '324 Nguyen Thi Minh Khai, HCMC', points: 850 },
    { id: 38, name: 'Truong Minh Tuan', email: 'tuan.truong@gmail.com', phone: '0902123232', address: '335 Le Duan, Da Nang', points: 150 },
    { id: 39, name: 'Bui Thi Duy', email: 'duy.bui@gmail.com', phone: '0903234343', address: '346 Hai Ba Trung, Hanoi', points: 1200 },
    { id: 40, name: 'Nguyen Thi Khai', email: 'khai.nguyen@gmail.com', phone: '0904345454', address: '357 Nguyen Hue, HCMC', points: 1100 },
    { id: 41, name: 'Truong Anh Bao', email: 'bao.truong@gmail.com', phone: '0905456565', address: '368 Le Duan, Da Nang', points: 500 },
    { id: 42, name: 'Pham Minh Lan', email: 'lan.pham@gmail.com', phone: '0906567676', address: '379 Ba Trieu, Hanoi', points: 750 },
    { id: 43, name: 'Le Minh Lan', email: 'lan.le@gmail.com', phone: '0907678787', address: '380 Nguyen Thi Minh Khai, HCMC', points: 300 },
    { id: 44, name: 'Nguyen Thi Hoang', email: 'hoang.nguyen@gmail.com', phone: '0908789898', address: '391 Hai Ba Trung, Da Nang', points: 650 },
    { id: 45, name: 'Truong Anh Lan', email: 'lan.truong@gmail.com', phone: '0909891001', address: '402 Le Duan, Hanoi', points: 900 },
    { id: 46, name: 'Pham Minh Hoang', email: 'hoang.pham@gmail.com', phone: '0901010102', address: '413 Ba Trieu, HCMC', points: 950 },
    { id: 47, name: 'Bui Anh Hoang', email: 'hoang.bui@gmail.com', phone: '0902123232', address: '424 Nguyen Thi Minh Khai, Da Nang', points: 1100 },
    { id: 48, name: 'Nguyen Minh Duy', email: 'duy.nguyen@gmail.com', phone: '0903234343', address: '435 Le Duan, Hanoi', points: 200 },
    { id: 49, name: 'Truong Thi Bao', email: 'bao.truong@gmail.com', phone: '0904345454', address: '446 Hai Ba Trung, HCMC', points: 1050 },
    { id: 50, name: 'Le Thi Bao', email: 'bao.le@gmail.com', phone: '0905456565', address: '457 Ba Trieu, Da Nang', points: 1200 },
  ];


  const [customerData, setCustomerData] = useState(initialCustomerData);
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(customerData);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editCustomer, setEditCustomer] = useState(null);

  const handleSearch = (value) => {
    setSearchText(value);
    const filtered = customerData.filter(customer =>
      customer.name.toLowerCase().includes(value.toLowerCase()) ||
      customer.email.toLowerCase().includes(value.toLowerCase()) ||
      customer.phone.includes(value)
    );
    setFilteredData(filtered);
  };

  const handleAddCustomer = () => {
    setIsModalVisible(true);
    setEditCustomer(null);  // Reset any customer data if editing
  };

  const handleEditCustomer = (customer) => {
    setIsModalVisible(true);
    setEditCustomer(customer);
  };

  const handleDeleteCustomer = (customerId) => {
    const updatedData = customerData.filter(customer => customer.id !== customerId);
    setCustomerData(updatedData);
    setFilteredData(updatedData);
  };

  const handleSubmit = (values) => {
    if (editCustomer) {
      // Update existing customer
      const updatedData = customerData.map(customer => 
        customer.id === editCustomer.id ? { ...customer, ...values } : customer
      );
      setCustomerData(updatedData);
      setFilteredData(updatedData);
    } else {
      // Add new customer
      const newCustomer = { ...values, id: customerData.length + 1 };
      const updatedData = [...customerData, newCustomer];
      setCustomerData(updatedData);
      setFilteredData(updatedData);
    }
    setIsModalVisible(false); // Close the modal after submitting
  };

  const columns = [
    {
      title: "Tên",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "SĐT",
      dataIndex: "phone",
    },
    {
      title: "Địa Chỉ",
      dataIndex: "address",
    },
    {
      title: "Điểm Thưởng",
      dataIndex: "points",
    },
    {
      title: "Customer Type",
      render: (text, record) => {
        const customerType = record.points >= 1000 ? "VIP" : "Normal";
        return <Tag color={record.points >= 1000 ? "gold" : "green"}>{customerType}</Tag>;
      },
    },
    {
      title: "Action",
      render: (text, record) => (
        <Space size="middle">
          <Button 
            icon={<EditOutlined />} 
            onClick={() => handleEditCustomer(record)} 
            size="small" 
            type="link" 
          />
          <Button 
            icon={<DeleteOutlined />} 
            onClick={() => handleDeleteCustomer(record.id)} 
            size="small" 
            type="link" 
          />
        </Space>
      ),
    },
  ];

  return (
    <Space size={30} direction="vertical" className="customers-container">
      <Typography.Title level={4} className="page-title">Customers</Typography.Title>
      
      {/* Search and Filters */}
      <Space size={20} className="filters">
        <Input 
          placeholder="Search by Name, Email, or Phone" 
          prefix={<SearchOutlined />} 
          onChange={(e) => handleSearch(e.target.value)} 
          value={searchText}
          className="search-input"
        />
        <Select defaultValue="all" style={{ width: 120 }} className="filter-select">
          <Select.Option value="all">All</Select.Option>
          <Select.Option value="active">Active</Select.Option>
          <Select.Option value="inactive">Inactive</Select.Option>
        </Select>
        <Button type="primary" onClick={handleAddCustomer} className="filter-btn">Add Customer</Button>
      </Space>

      {/* Table for customers */}
      <Table 
        columns={columns} 
        dataSource={filteredData} 
        pagination={{ pageSize: 5 }} 
        rowKey="id"
        className="customers-table"
      />

      {/* Modal for adding or editing customer */}
      <Modal
        title={editCustomer ? "Edit Customer" : "Add Customer"}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form
          initialValues={editCustomer || {}}
          onFinish={handleSubmit}
          layout="vertical"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input the customer name!' }]}
          >
            <AntInput />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input the customer email!' }]}
          >
            <AntInput />
          </Form.Item>
          <Form.Item
            label="Phone"
            name="phone"
            rules={[{ required: true, message: 'Please input the customer phone!' }]}
          >
            <AntInput />
          </Form.Item>
          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: 'Please input the customer address!' }]}
          >
            <AntInput />
          </Form.Item>
          <Form.Item
            label="Points"
            name="points"
            rules={[{ required: true, message: 'Please input the customer points!' }]}
          >
            <AntInput type="number" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              {editCustomer ? "Update Customer" : "Add Customer"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </Space>
  );
}

export default Customers;
