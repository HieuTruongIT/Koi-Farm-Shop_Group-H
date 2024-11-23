import React, { useState } from 'react';
import { FaCog, FaUser, FaLock, FaSave, FaTimesCircle } from 'react-icons/fa';
import './Settings.css';

const SettingsPage = () => {
    const [userInfo, setUserInfo] = useState({
        username: 'admin',
        email: 'admin@example.com',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
    };

    const handleSave = () => {
        console.log('Settings saved:', userInfo);
        alert('Settings have been updated!');
    };

    const handleCancel = () => {
        console.log('Settings changes canceled');
        setUserInfo({ username: '', email: '', password: '' });
    };

    return (
        <div className="settings-page">
            <h1><FaCog /> Cài Đặt Hệ Thống</h1>

            <div className="settings-form">
                <div className="form-group">
                    <label htmlFor="username"><FaUser /> Tên người dùng:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={userInfo.username}
                        onChange={handleChange}
                        placeholder="Nhập tên người dùng"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email"><FaUser /> Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={userInfo.email}
                        onChange={handleChange}
                        placeholder="Nhập email"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password"><FaLock /> Mật khẩu:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={userInfo.password}
                        onChange={handleChange}
                        placeholder="Nhập mật khẩu"
                    />
                </div>

                <div className="buttons">
                    <button className="btn save-btn" onClick={handleSave}><FaSave /> Lưu</button>
                    <button className="btn cancel-btn" onClick={handleCancel}><FaTimesCircle /> Hủy</button>
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;
