import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import Logo from '../../assets/Register_image.jpg';

const RegisterPage = () => {
    const [userData, setUserData] = useState({  // Sửa lỗi ở đây
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({   // Sửa lỗi ở đây
            ...userData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (userData.password !== userData.confirmPassword) {
            setErrorMessage("Passwords don't match");
            return;
        }
    
        try {
            const response = await fetch('http://localhost:8080/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: userData.username,
                    email: userData.email,
                    password: userData.password
                })
            });
    
            const responseData = await response.json();
    
            if (response.ok) {
                setErrorMessage('');
                navigate('/');  // Chuyển hướng về trang chủ nếu thành công
            } else {
                setErrorMessage(responseData.message || "Error occurred while registering");
                console.error('Error from backend:', responseData);
            }
        } catch (error) {
            setErrorMessage("Error occurred while registering");
            console.error("Error:", error);
        }
    };

    return (
        <div className="register-page">
            <div className="register-container">
                <div className="image-section">
                    <img src={Logo} alt="OnKoi" className="logo-image" />
                </div>
                <div className="form-section">
                    <h2>Create an Account</h2>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={userData.username}
                                onChange={handleChange}
                                placeholder="Enter your username"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={userData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={userData.password}
                                onChange={handleChange}
                                placeholder="Create a password"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input
                                type="password"
                                id="confirm-password"
                                name="confirmPassword"
                                value={userData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Re-enter your password"
                                required
                            />
                        </div>
                        <button type="submit" className="submit-button">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;