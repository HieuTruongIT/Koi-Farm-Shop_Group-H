import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Logo from '../../assets/Login_Image.jpg'; // Adjust path accordingly

const LoginPage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleLogin = () => {
        // Simulate a successful login
        setIsLoggedIn(true);

        // Redirect after 2 seconds
        setTimeout(() => {
            navigate('/BuyFishKoi'); // Replace with your actual redirect URL
        }, 2000);
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="image-section">
                    <img src={Logo} alt="OnKoi" className="logo-image" />
                </div>
                <div className="form-section">
                    <h2>Login</h2>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        {isLoggedIn && (
                            <p className="success-message">Login Successful!</p>
                        )}

                        <button
                            type="button"
                            className="submit-button"
                            onClick={handleLogin}
                        >
                            Login
                        </button>
                    </form>
                    <div className="footer-links">
                        <a href="/forgot-password" className="link">Forgot Password?</a>
                        <a href="/register" className="link">Don't have an account? Register</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
