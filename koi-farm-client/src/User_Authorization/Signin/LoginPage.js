import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import Logo from '../../assets/Login_Image.jpg';

const LoginPage = () => {
    return (
        <div className="login-container">
            <div className="content-wrapper">
                <div className="image-section">
                    <img src={Logo} alt="OnKoi" />
                </div>
                <div className="form-section">
                    <h2>Login</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" required />
                        </div>
                        <Link to="/BuyFishKoi" className="link-button">
                            <button type="button" className="login-button">Login</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
