import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import Logo from '../../assets/Register_image.jpg';

const RegisterPage = () => {
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [showLoginPrompt, setShowLoginPrompt] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (userData.password !== userData.confirmPassword) {
            setErrorMessage("Passwords don't match");
            setSuccessMessage('');
            return;
        }

        // Simulate registration success
        setSuccessMessage('Registration successful!');
        setErrorMessage('');
        setShowLoginPrompt(true);
    };

    const handleLoginRedirect = () => {
        navigate('/login');
    };

    const handleHomeRedirect = () => {
        navigate('/');
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
                    {successMessage && <p className="success-message">{successMessage}</p>}
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

                    {showLoginPrompt && (
                        <div className="login-prompt">
                            <p>Would you like to log in now?</p>
                            <div className="prompt-buttons">
                                <button className="yes-button" onClick={handleLoginRedirect}>Yes</button>
                                <button className="no-button" onClick={handleHomeRedirect}>No</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
