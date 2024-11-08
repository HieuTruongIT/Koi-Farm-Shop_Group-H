import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLoginPage.css'; // Make sure the CSS file is linked
import AdminLogin from '../../assets/AdminLogin.jpg'

const AdminLoginPage = () => {
    const navigate = useNavigate(); // Using useNavigate for routing

    const handleLogin = (e) => {
        e.preventDefault();
        navigate('/admin/dashboard'); // Redirect to the dashboard after successful login
    };

    return (
        <div className="login-container">
            <div className="image-container">
                {/* Add your image URL */}
                <img src={AdminLogin} alt="Admin Login" />
            </div>
            <div className="form-container">
                <form onSubmit={handleLogin}>
                    <h2>Admin Login</h2>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" required />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" required />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default AdminLoginPage;
