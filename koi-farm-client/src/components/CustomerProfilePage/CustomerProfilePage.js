import React, { useState, useEffect } from 'react';
import './CustomerProfilePage.css';  

const CustomerProfilePage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(null);
    const [isEditMode, setIsEditMode] = useState(false);

    // Mock data to initialize customer information
    const mockCustomerData = {
        name: 'Koi Shop Group H',
        email: 'onkoi@ut.edu.vn',
        phone: '0123456789',
        address: '70 Đ. Tô Ký, Tân Chánh Hiệp, Quận 12, Hồ Chí Minh',
    };

    // Load mock data into state on component mount
    useEffect(() => {
        setName(mockCustomerData.name);
        setEmail(mockCustomerData.email);
        setPhone(mockCustomerData.phone);
        setAddress(mockCustomerData.address);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulate successful update
        setIsSuccess(true);
        setMessage('Thông tin đã được cập nhật thành công!');
        setIsEditMode(false); // Exit edit mode after updating

        // Message disappears after 3 seconds
        setTimeout(() => setMessage(''), 3000);
    };

    return (
        <div className="profile-container">
            <h1>Trang Hồ Sơ Khách Hàng</h1>

            {!isEditMode ? (
                <div className="profile-info">
                    <p><strong>Tên:</strong> {name}</p>
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Số điện thoại:</strong> {phone}</p>
                    <p><strong>Địa chỉ:</strong> {address}</p>
                    <button onClick={() => setIsEditMode(true)}>Chỉnh sửa thông tin</button>
                </div>
            ) : (
                <form className="profile-form" onSubmit={handleSubmit}>
                    <label>
                        Tên:
                        <input 
                            type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required 
                        />
                    </label>
                    <label>
                        Email:
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </label>
                    <label>
                        Số điện thoại:
                        <input 
                            type="tel" 
                            value={phone} 
                            onChange={(e) => setPhone(e.target.value)} 
                            required 
                        />
                    </label>
                    <label>
                        Địa chỉ:
                        <input 
                            type="text" 
                            value={address} 
                            onChange={(e) => setAddress(e.target.value)} 
                            required 
                        />
                    </label>
                    <button type="submit">Cập nhật thông tin</button>
                </form>
            )}

            {message && (
                <div className={`message ${isSuccess ? 'success-message' : 'error-message'}`}>
                    {message}
                </div>
            )}

            <div className="additional-info">
                <h2>Thông tin thêm</h2>
                <p>Đây là nơi bạn có thể cập nhật thông tin bổ sung về tài khoản hoặc các chi tiết khác.</p>
            </div>
        </div>
    );
};

export default CustomerProfilePage;
