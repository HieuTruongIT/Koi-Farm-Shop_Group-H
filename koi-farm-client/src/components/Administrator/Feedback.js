import React, { useState } from 'react';
import { Button, Modal, Form, Input, InputNumber, Select, Upload, message } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import './ProductManagement.css';
import CaKoi1 from '../../assets/koi1.jpg';
import CaKoi2 from '../../assets/koi2.jpg';
import CaKoi3 from '../../assets/koi3.jpg';
import CaKoi4 from '../../assets/koi4.jpg';
import CaKoi5 from '../../assets/koi5.jpg';
import CaKoi6 from '../../assets/koi6.jpg';
import CaKoi7 from '../../assets/koi7.jpg';
import CaKoi8 from '../../assets/koi8.jpg';
import CaKoi9 from '../../assets/koi9.jpg';
import CaKoi10 from '../../assets/koi10.jpg';
import CaKoi11 from '../../assets/koi11.jpg';
import CaKoi12 from '../../assets/koi12.jpg';

const ProductManagement = () => {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Koi Thuần Chủng 1",
            image: CaKoi1, // Image for the product
            type: "thuần chủng",
            age: 2,
            size: 30,
            purpose: "bán",
            senderName: "Nguyễn Văn A",
            address: "123 Đường Láng, Hà Nội",
            sendTime: "2024-11-19T08:30:00",
            price: 300000,
            quantity: 10
        },
        {
            id: 2,
            name: "Koi Thuần Chủng 2",
            image: CaKoi2,
            type: "thuần chủng",
            age: 3,
            size: 35,
            purpose: "chăm sóc",
            senderName: "Nguyễn Văn B",
            address: "456 Đường Láng, Hà Nội",
            sendTime: "2024-11-18T10:00:00",
            price: 350000,
            quantity: 15
        },
        {
            id: 3,
            name: "Koi Lai F1 1",
            image: CaKoi3,
            type: "lai F1",
            age: 1,
            size: 25,
            purpose: "bán",
            senderName: "Nguyễn Văn C",
            address: "789 Đường Láng, Hà Nội",
            sendTime: "2024-11-17T09:00:00",
            price: 200000,
            quantity: 5
        },
        {
            id: 4,
            name: "Koi Lai F1 2",
            image: CaKoi4,
            type: "lai F1",
            age: 4,
            size: 40,
            purpose: "chăm sóc",
            senderName: "Nguyễn Văn D",
            address: "101 Đường Láng, Hà Nội",
            sendTime: "2024-11-16T08:00:00",
            price: 250000,
            quantity: 12
        },
        {
            id: 5,
            name: "Koi Thuần Việt 1",
            image: CaKoi5,
            type: "thuần Việt",
            age: 5,
            size: 45,
            purpose: "bán",
            senderName: "Nguyễn Văn E",
            address: "102 Đường Láng, Hà Nội",
            sendTime: "2024-11-15T11:00:00",
            price: 400000,
            quantity: 8
        },
        {
            id: 6,
            name: "Koi Thuần Việt 2",
            image: CaKoi6,
            type: "thuần Việt",
            age: 3,
            size: 38,
            purpose: "bán",
            senderName: "Nguyễn Văn F",
            address: "103 Đường Láng, Hà Nội",
            sendTime: "2024-11-14T10:00:00",
            price: 370000,
            quantity: 9
        },
        {
            id: 7,
            name: "Koi Lai F1 3",
            image: CaKoi1,
            type: "lai F1",
            age: 2,
            size: 32,
            purpose: "chăm sóc",
            senderName: "Nguyễn Văn G",
            address: "104 Đường Láng, Hà Nội",
            sendTime: "2024-11-13T12:00:00",
            price: 220000,
            quantity: 6
        },
        {
            id: 8,
            name: "Koi Thuần Chủng 3",
            image: CaKoi7,
            type: "thuần chủng",
            age: 1,
            size: 28,
            purpose: "bán",
            senderName: "Nguyễn Văn H",
            address: "105 Đường Láng, Hà Nội",
            sendTime: "2024-11-12T14:00:00",
            price: 320000,
            quantity: 14
        },
        {
            id: 9,
            name: "Koi Thuần Chủng 4",
            image: CaKoi8,
            type: "thuần chủng",
            age: 6,
            size: 50,
            purpose: "chăm sóc",
            senderName: "Nguyễn Văn I",
            address: "106 Đường Láng, Hà Nội",
            sendTime: "2024-11-11T15:00:00",
            price: 450000,
            quantity: 7
        },
        {
            id: 10,
            name: "Koi Lai F1 4",
            image: CaKoi9,
            type: "lai F1",
            age: 4,
            size: 42,
            purpose: "chăm sóc",
            senderName: "Nguyễn Văn J",
            address: "107 Đường Láng, Hà Nội",
            sendTime: "2024-11-10T16:00:00",
            price: 280000,
            quantity: 11
        },
        {
            id: 11,
            name: "Koi Lai F1 5",
            image: CaKoi10,
            type: "lai F1",
            age: 3,
            size: 34,
            purpose: "bán",
            senderName: "Nguyễn Văn K",
            address: "108 Đường Láng, Hà Nội",
            sendTime: "2024-11-09T17:00:00",
            price: 230000,
            quantity: 13
        },
        {
            id: 12,
            name: "Koi Thuần Việt 3",
            image: CaKoi11,
            type: "thuần Việt",
            age: 2,
            size: 30,
            purpose: "chăm sóc",
            senderName: "Nguyễn Văn L",
            address: "109 Đường Láng, Hà Nội",
            sendTime: "2024-11-08T18:00:00",
            price: 340000,
            quantity: 10
        },
        {
            id: 13,
            name: "Koi Thuần Chủng 5",
            image: CaKoi12,
            type: "thuần chủng",
            age: 4,
            size: 45,
            purpose: "bán",
            senderName: "Nguyễn Văn M",
            address: "110 Đường Láng, Hà Nội",
            sendTime: "2024-11-07T19:00:00",
            price: 500000,
            quantity: 6
        },
        {
            id: 14,
            name: "Koi Lai F1 6",
            image: CaKoi1,
            type: "lai F1",
            age: 5,
            size: 46,
            purpose: "chăm sóc",
            senderName: "Nguyễn Văn N",
            address: "111 Đường Láng, Hà Nội",
            sendTime: "2024-11-06T20:00:00",
            price: 260000,
            quantity: 8
        },
        {
            id: 15,
            name: "Koi Thuần Việt 4",
            image: CaKoi2,
            type: "thuần Việt",
            age: 1,
            size: 27,
            purpose: "bán",
            senderName: "Nguyễn Văn O",
            address: "112 Đường Láng, Hà Nội",
            sendTime: "2024-11-05T21:00:00",
            price: 220000,
            quantity: 10
        },
        {
            id: 16,
            name: "Koi Thuần Chủng 6",
            image: CaKoi3,
            type: "thuần chủng",
            age: 3,
            size: 37,
            purpose: "chăm sóc",
            senderName: "Nguyễn Văn P",
            address: "113 Đường Láng, Hà Nội",
            sendTime: "2024-11-04T22:00:00",
            price: 330000,
            quantity: 9
        }
    ]);

    const [editingProduct, setEditingProduct] = useState(null);
    const [isAddModalVisible, setIsAddModalVisible] = useState(false);
    const [isEditModalVisible, setIsEditModalVisible] = useState(false);
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
    const [deleteProductId, setDeleteProductId] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);  // For showing image preview in the modal

    // Handle Add Product Modal
    const handleAddProduct = () => {
        setIsAddModalVisible(true);
    };

    // Handle Edit Product Modal
    const handleEditProduct = (product) => {
        setEditingProduct(product);
        setImagePreview(product.image);  // Show current image preview
        setIsEditModalVisible(true);
    };

    // Handle Delete Product
    const handleDeleteProduct = (id) => {
        setDeleteProductId(id);
        setIsDeleteModalVisible(true);
    };

    const handleConfirmDelete = () => {
        setProducts(prevProducts => prevProducts.filter(product => product.id !== deleteProductId));
        setIsDeleteModalVisible(false);
        message.success('Sản phẩm đã bị xóa');
    };

    const handleCancelDelete = () => {
        setIsDeleteModalVisible(false);
    };

    const handleImageChange = ({ fileList }) => {
        if (fileList.length > 0) {
            const file = fileList[0].originFileObj;
            setImageFile(file);
            const reader = new FileReader();
            reader.onload = () => setImagePreview(reader.result);
            reader.readAsDataURL(file);
        } else {
            setImageFile(null);
            setImagePreview(null);
        }
    };

    const handleFormSubmit = (values) => {
        const productData = {
            id: editingProduct ? editingProduct.id : products.length + 1,
            image: imageFile || CaKoi1, // Use uploaded image if available, otherwise default
            ...values
        };

        if (editingProduct) {
            const updatedProducts = products.map(product =>
                product.id === editingProduct.id ? { ...product, ...productData } : product
            );
            setProducts(updatedProducts);
            setIsEditModalVisible(false);
            message.success('Sản phẩm đã được cập nhật');
        } else {
            setProducts(prevProducts => [...prevProducts, productData]);
            setIsAddModalVisible(false);
            message.success('Sản phẩm đã được thêm');
        }
    };

    return (
        <div className="product-management">
            <h1>Quản lý Sản phẩm</h1>
            <Button type="primary" icon={<PlusOutlined />} onClick={handleAddProduct}>Thêm sản phẩm</Button>
            <div className="product-list">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} width="100" height="100" />
                        <div className="product-details">
                            <h3>{product.name}</h3>
                            <p><strong>Loại:</strong> {product.type}</p>
                            <p><strong>Tuổi:</strong> {product.age}</p>
                            <p><strong>Kích cỡ:</strong> {product.size} cm</p>
                            <p><strong>Mục đích:</strong> {product.purpose}</p>
                            <p><strong>Gửi bởi:</strong> {product.senderName}</p>
                            <p><strong>Địa chỉ:</strong> {product.address}</p>
                            <p><strong>Thời gian gửi:</strong> {new Date(product.sendTime).toLocaleString()}</p>
                            <p><strong>Giá:</strong> {product.price} VND</p>
                            <p><strong>Số lượng:</strong> {product.quantity}</p>
                            <div className="product-actions">
                                <Button icon={<EditOutlined />} onClick={() => handleEditProduct(product)}>Sửa</Button>
                                <Button icon={<DeleteOutlined />} onClick={() => handleDeleteProduct(product.id)} danger>Xóa</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Add Product Modal */}
            <Modal
                title="Thêm Sản Phẩm"
                visible={isAddModalVisible}
                onCancel={() => setIsAddModalVisible(false)}
                footer={null}
            >
                <Form onFinish={handleFormSubmit}>
                    <Form.Item name="name" label="Tên sản phẩm" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="type" label="Loại" rules={[{ required: true }]}>
                        <Select>
                            <Select.Option value="thuần chủng">Thuần Chủng</Select.Option>
                            <Select.Option value="lai F1">Lai F1</Select.Option>
                            <Select.Option value="thuần Việt">Thuần Việt</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="age" label="Tuổi" rules={[{ required: true }]}>
                        <InputNumber />
                    </Form.Item>
                    <Form.Item name="size" label="Kích cỡ (cm)" rules={[{ required: true }]}>
                        <InputNumber />
                    </Form.Item>
                    <Form.Item name="purpose" label="Mục đích" rules={[{ required: true }]}>
                        <Select>
                            <Select.Option value="bán">Bán</Select.Option>
                            <Select.Option value="chăm sóc">Chăm Sóc</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="price" label="Giá (VND)" rules={[{ required: true }]}>
                        <InputNumber />
                    </Form.Item>
                    <Form.Item name="quantity" label="Số lượng" rules={[{ required: true }]}>
                        <InputNumber />
                    </Form.Item>
                    <Form.Item label="Ảnh sản phẩm">
                        <Upload
                            name="image"
                            listType="picture"
                            beforeUpload={() => false}
                            onChange={handleImageChange}
                            showUploadList={false}
                        >
                            <Button icon={<UploadOutlined />}>Chọn ảnh</Button>
                        </Upload>
                        {imagePreview && <img src={imagePreview} alt="Preview" width="100" />}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Thêm</Button>
                    </Form.Item>
                </Form>
            </Modal>

            {/* Edit Product Modal */}
            <Modal
                title="Sửa Sản Phẩm"
                visible={isEditModalVisible}
                onCancel={() => setIsEditModalVisible(false)}
                footer={null}
            >
                <Form initialValues={editingProduct} onFinish={handleFormSubmit}>
                    <Form.Item name="name" label="Tên sản phẩm" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="type" label="Loại" rules={[{ required: true }]}>
                        <Select>
                            <Select.Option value="thuần chủng">Thuần Chủng</Select.Option>
                            <Select.Option value="lai F1">Lai F1</Select.Option>
                            <Select.Option value="thuần Việt">Thuần Việt</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="age" label="Tuổi" rules={[{ required: true }]}>
                        <InputNumber />
                    </Form.Item>
                    <Form.Item name="size" label="Kích cỡ (cm)" rules={[{ required: true }]}>
                        <InputNumber />
                    </Form.Item>
                    <Form.Item name="purpose" label="Mục đích" rules={[{ required: true }]}>
                        <Select>
                            <Select.Option value="bán">Bán</Select.Option>
                            <Select.Option value="chăm sóc">Chăm Sóc</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="price" label="Giá (VND)" rules={[{ required: true }]}>
                        <InputNumber />
                    </Form.Item>
                    <Form.Item name="quantity" label="Số lượng" rules={[{ required: true }]}>
                        <InputNumber />
                    </Form.Item>
                    <Form.Item label="Ảnh sản phẩm">
                        <Upload
                            name="image"
                            listType="picture"
                            beforeUpload={() => false}
                            onChange={handleImageChange}
                            showUploadList={false}
                        >
                            <Button icon={<UploadOutlined />}>Chọn ảnh</Button>
                        </Upload>
                        {imagePreview && <img src={imagePreview} alt="Preview" width="100" />}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Cập nhật</Button>
                    </Form.Item>
                </Form>
            </Modal>

            {/* Delete Product Modal */}
            <Modal
                title="Xóa Sản Phẩm"
                visible={isDeleteModalVisible}
                onOk={handleConfirmDelete}
                onCancel={handleCancelDelete}
                okText="Xóa"
                cancelText="Hủy"
            >
                <p>Bạn có chắc chắn muốn xóa sản phẩm này?</p>
            </Modal>
        </div>
    );
};

export default ProductManagement;