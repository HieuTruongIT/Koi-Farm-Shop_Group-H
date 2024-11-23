import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Input } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import './UserManagement.css';

// Sample User Data with Vietnamese names and @gmail.com emails
const sampleUsers = [
    { key: 1, username: 'onkoi', email: 'onkoih@gmail.com', role: 'Admin', password: 'laptrinhjava' },
    { key: 2, username: 'koishop', email: 'koishop@gmail.com', role: 'Admin', password: 'javagrouph' },
    { key: 3, username: 'le_thi_bich', email: 'lethibich@gmail.com', role: 'User', password: 'bichpassword' },
    { key: 4, username: 'hoang_minh', email: 'hoangminh@gmail.com', role: 'User', password: 'minhpassword' },
    { key: 5, username: 'pham_thi_hien', email: 'phamthihien@gmail.com', role: 'User', password: 'hienpassword' },
  ];
  

const UserManagement = () => {
  const [users, setUsers] = useState(sampleUsers);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const showModal = (user = null) => {
    setCurrentUser(user);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setCurrentUser(null);
  };

  // Function to confirm and delete user
  const handleDelete = (userKey) => {
    Modal.confirm({
      title: 'Are you sure you want to delete this user?',
      onOk: () => {
        setUsers(users.filter(user => user.key !== userKey));
      },
      onCancel() {
        console.log('Delete cancelled');
      },
    });
  };

  const handleSave = (values) => {
    if (currentUser) {
      setUsers(users.map(user => user.key === currentUser.key ? { ...user, ...values } : user));
    } else {
      const newUser = { key: Date.now(), ...values };
      setUsers([...users, newUser]);
    }
    setIsModalVisible(false);
    setCurrentUser(null);
  };

  const columns = [
    { title: 'Username', dataIndex: 'username', key: 'username' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Role', dataIndex: 'role', key: 'role' },
    {
      title: 'Action', key: 'action', render: (text, record) => (
        <>
          <Button icon={<EditOutlined />} onClick={() => showModal(record)} />
          <Button icon={<DeleteOutlined />} danger onClick={() => handleDelete(record.key)} />
        </>
      ),
    },
  ];

  return (
    <div>
      <h2>User Management</h2>
      <Button type="primary" onClick={() => showModal()} style={{ marginBottom: 16 }}>
        Add User
      </Button>
      <Table columns={columns} dataSource={users} pagination={false} />
      
      <Modal
        title={currentUser ? 'Edit User' : 'Add User'}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <UserForm user={currentUser} onSave={handleSave} />
      </Modal>
    </div>
  );
};

const UserForm = ({ user, onSave }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (user) {
      form.setFieldsValue(user);
    } else {
      form.resetFields();
    }
  }, [user, form]);

  const onFinish = (values) => {
    onSave(values);
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input the username!' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input the email!' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Role" name="role" rules={[{ required: true, message: 'Please select the role!' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input the password!' }]}>
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          {user ? 'Save Changes' : 'Add User'}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UserManagement;
