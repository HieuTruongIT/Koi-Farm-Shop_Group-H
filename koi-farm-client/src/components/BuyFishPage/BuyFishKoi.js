import React, { useEffect, useState } from 'react';
import { FaShoppingCart, FaHome, FaInfoCircle, FaPhoneAlt, FaBars, FaUserAlt, FaUserCog } from 'react-icons/fa'; // Thêm icon mới cho admin
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; // Social icons
import Koi1 from '../../assets/slide_show1.jpg';
import Koi2 from '../../assets/slide_show2.jpg';
import Koi3 from '../../assets/slide_show3.jpg';
import Koi4 from '../../assets/slide_show4.jpg';
import Koi5 from '../../assets/slide_show5.jpg';
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
import contactImage from '../../assets/Contact.jpg'; 
import paymentImage from '../../assets/Payment.jpg'; 

import { useStore } from '../../zustand/store';
import fishData from './fishData.json';
import './BuyFish.css';
import { Link } from 'react-router-dom';

function BuyFishPage() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const addCart = useStore(state => state.addCart);
  const getTotalPrice = useStore(state => state.getTotalPrice);

  // Chỉ hiển thị 5 hình ảnh đầu tiên cho slideshow
  const slideshowImages = [
    Koi1, Koi2, Koi3, Koi4, Koi5
  ];

  // Tất cả các hình ảnh cho sản phẩm cá
  const fishImages = [
    CaKoi1, CaKoi2, CaKoi3, CaKoi4, CaKoi5,
    CaKoi6, CaKoi7, CaKoi8, CaKoi9, CaKoi10,
    CaKoi11, CaKoi12
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideshowImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [slideshowImages.length]);

  const handleAddCart = (item) => {
    addCart({ ...item, quantity: 1 });
  };

  useEffect(() => {
    const price = getTotalPrice();
    setTotalPrice(price);
  }, [getTotalPrice]);

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="header-logo">
          <h1>Koi Farm Shop Nhóm H</h1>
        </div>
        <nav className="nav">
          <a href="#"><FaHome className="icon" /> Home</a>
          <a href="#"><FaInfoCircle className="icon" /> About</a>
          <a href="#"><FaPhoneAlt className="icon" /> Contact</a>
          
          {/* Dropdown for 'More' */}
          <div className="dropdown">
            <a href="#" className="dropbtn"><FaBars className="icon" /> More</a>
            <div className="dropdown-content">
              {/* Sub-menu for additional features */}
              <div className="sub-menu">
                <Link to="/searchpage">Tìm Kiếm</Link>
                <Link to="/registration">Ký Gửi</Link>
                <Link to="/feedbackpage">Đánh Giá</Link>
                <Link to="/promotions">Khuyến Mãi</Link>
              </div>
            </div>
          </div>
        </nav>
        <div className="header-icons">
          {/* User icon */}
          <Link to="/customerProfilePage" className="header-icon user-icon">
            <FaUserAlt size={24} color="#fff" />
          </Link>
          {/* Admin icon changed to FaUserCog */}
          <Link to="/adminlogin" className="header-icon admin-icon">
            <FaUserCog size={24} color="#fff" />
          </Link>
          {/* Cart icon */}
          <a href="/BuyShopFish" className="header-icon cart-icon">
            <FaShoppingCart size={24} color="#fff" />
          </a>
        </div>
      </header>

      {/* Slideshow */}
      <div className="slideshow-container">
        <img src={slideshowImages[currentIndex]} alt="Slideshow" className="slideshow-img" />
      </div>

      {/* Main Content */}
      <main className="container mx-auto py-8">
        <div className="card-container">
          {fishData.map((fishItem, index) => (
            <div key={fishItem.id} className="card">
              <img alt="Koi fish image" src={fishImages[index % fishImages.length]} />
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <i className="fas fa-bullhorn text-red-600 mr-2"></i>
                  <span className="bg-red-600 text-white px-2 py-1 rounded">Đang bán</span>
                </div>
                <h2 className="title">{fishItem.name} #{fishItem.sku}</h2>
                <p className="description">{fishItem.description}</p>
                <p className="price">Giá mua ngay: <a className="underline" href="#">300.000đ</a></p>
                <button className="order-button" onClick={() => handleAddCart(fishItem)}>
                  <a href="/BuyShopFish">ĐẶT HÀNG NGAY</a>
                </button>
                <div className="mt-4">
                  <p>Người bán: <a className="text-blue-600 underline" href="#">{fishItem.seller}</a></p>
                  <p>Giới tính: {fishItem.gender}</p>
                  <p>Năm sinh: {fishItem.dob}</p>
                  <p>Kích thước: {fishItem.size}</p>
                  <p>Giống: <a className="text-blue-600 underline" href="#">{fishItem.fish}</a></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-left">
          <p>University of Transport and Communications</p>
          <p>Java Programming Course</p>
          <p>Group Members:</p>
          <div className="group-members">
            <div className="group-column">
              <ul>
                <li>Lâm Chí Huy</li>
                <li>Nguyễn Xuân Hải</li>
                <li>Trương Trọng Hiếu</li>
                <li>Nguyễn Minh Cảnh</li>
              </ul>
            </div>
            <div className="group-column">
              <ul>
                <li>Đỗ Gia Long</li>
                <li>Võ Tá Khánh</li>
                <li>Đoàn Minh Khôi</li>
              </ul>
            </div>
          </div>
          <p>Address: 123 Example St., Ho Chi Minh City, Vietnam</p>
        </div>
        <div className="footer-center">
          <p>Contact Us:</p>
          <p>Email: contact@koi-farm.com</p>
          <p>Phone: +84 123 456 789</p>
          <p>Business Hours: Monday - Friday, 9:00 AM - 6:00 PM</p>
          <div className="contact-img">
            <img src={contactImage} alt="Contact" className="footer-img" />
          </div>
        </div>
        <div className="footer-right">
          <p>Payment Methods:</p>
          <p>Credit Card, PayPal, Bank Transfer</p>
          <p>Follow Us:</p>
          <p>
            <FaFacebook className="social-icon" /> Facebook
            <FaInstagram className="social-icon" /> Instagram
            <FaTwitter className="social-icon" /> Twitter
          </p>
          <div className="payment-img">
            <img src={paymentImage} alt="Payment Methods" className="footer-img" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default BuyFishPage;
