import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLoginPage.css'; // Ensure CSS file is linked correctly
import AdminLogin from '../../assets/AdminLogin.jpg';

const AdminLoginPage = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [attempts, setAttempts] = useState(0);

    const validCredentials = [
        { username: 'onkoi', password: 'laptrinhjava' },
        { username: 'koishop', password: 'javagrouph' }
    ];

    const handleLogin = (e) => {
        e.preventDefault();
        const isValidUser = validCredentials.some(
            (cred) => cred.username === username && cred.password === password
        );

        if (isValidUser) {
            setSuccessMessage('Login successful!');
            setErrorMessage('');
            setTimeout(() => navigate('/admin/dashboard'), 1500); // Navigate to dashboard after delay
        } else {
            setErrorMessage('Invalid username or password!');
            setSuccessMessage('');
            setAttempts((prev) => prev + 1);

            if (attempts + 1 >= 2) {
                setErrorMessage('Too many failed attempts. Please try again later.');
            }
        }
    };

    const isLockedOut = attempts >= 2;

    return (
        <div className="login-container">
            <div className="image-container">
                <img src={AdminLogin} alt="Admin Login" />
            </div>
            <div className="form-container">
                <form onSubmit={handleLogin}>
                    <h2>Admin Login</h2>
                    {successMessage && <p className="success-message">{successMessage}</p>}
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <div className="form-group">
                        <label>Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            disabled={isLockedOut}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            disabled={isLockedOut}
                            required
                        />
                    </div>
                    <button type="submit" disabled={isLockedOut}>
                        {isLockedOut ? 'Locked' : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLoginPage;
