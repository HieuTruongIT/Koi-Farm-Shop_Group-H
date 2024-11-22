import React from 'react';
import { Link } from 'react-router-dom'; 
import './OnKoi.css';
import LogoOnKoi from '../../assets/LogoOnKoi.png';

const IntroPage = () => {
    return (
        <div className="intro-page">
            <header className="intro-header">
                <div className="logo">OnKoi</div>
                <nav className="nav-bar">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#more">More</a>
                    <a href="#contact">Contact</a>
                </nav>
                <div className="auth-buttons">
                    <Link to="/login">
                        <button className="login-button">Login</button>
                    </Link>
                    <Link to="/register">
                        <button className="register-button">Register</button>
                    </Link>
                </div>
            </header>

            <main className="intro-body">
                <div className="image-container">
                    <img src={LogoOnKoi} alt="OnKoi" />
                </div>
                <div className="content">
                    <h2>Welcome to OnKoi</h2>
                    <p>OnKoi offers premium quality products and services tailored to meet your needs. We are committed to providing an exceptional experience with a focus on quality, reliability, and customer satisfaction.</p>
                    <p>Explore our wide range of offerings and start your journey with us today!</p>
                    <div className="team">
                        <p>This project was carried out by a group of students from the University of Transport.</p>
                        <ul>
                            <li>Lâm Chí Huy</li>
                            <li>Nguyễn Xuân Hải</li>
                            <li>Trương Trọng Hiếu</li>
                            <li>Nguyễn Minh Cảnh</li>
                            <li>Đỗ Gia Long</li>
                            <li>Võ Tá Khánh</li>
                            <li>Đoàn Minh Khôi</li>
                        </ul>
                    </div>
                </div>
            </main>

            <footer className="intro-footer">
                <div className="footer-content">
                    <p>© 2024 OnKoi. All Rights Reserved.</p>
                    <div className="footer-links">
                        <a href="#privacy">Privacy Policy</a>
                        <a href="#terms">Terms of Service</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default IntroPage;
