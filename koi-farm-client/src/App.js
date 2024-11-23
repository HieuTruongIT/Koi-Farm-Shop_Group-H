import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IntroPage from './components/OnKoi/OnKoiShopPage';
import OnKoiShopPage from './components/OnKoi/OnKoiShopPage';
import LoginPage from './User_Authorization/Signin/LoginPage';
import RegisterPage from './User_Authorization/Register/RegisterPage';
import BuyFishKoi from './components/BuyFishPage/BuyFishKoi';
import BuyShopFish from './components/BuyShopFish/BuyShopFish';
import CompareFish from './components/CompareFish/CompareFish';
import FeedbackPage from './components/FeedBack/FeedBackPage';
import SearchPage from './components/SearchPage/SearchPage';
import Registration from './components/Registration/Registration';
import Promotions from './components/Promotion/Promotions';
import CustomerProfilePage from './components/CustomerProfilePage/CustomerProfilePage';
import AdminLoginPage from './components/AdminLoginPage/AdminLoginPage';
import SideMenu from './components/Administrator/SideMenu';
import DashBoard from './components/Administrator/Dashboard';
import Inventory from './components/Administrator/Inventory';
import Orders from './components/Administrator/Orders';
import Customers from './components/Administrator/Customers';
import KyGuiPage from './components/Administrator/KyGuiPage';
import DanhGiaPage from './components/Administrator/DanhGiaPage';
import KhuyenMaiPage from './components/Administrator/KhuyenMaiPage';
import Reports from './components/Administrator/Reports';
import SettingsPage from './components/Administrator/Settings';  // Fixed typo here
import UserManagement from './components/Administrator/UserManagement';
import PaymentMethods from './components/Administrator/PaymentMethods';
import Shipping from './components/Administrator/Shipping';
import FeedbackAdmin from './components/Administrator/Feedback'; // Corrected this import name

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<IntroPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/shop" element={<OnKoiShopPage />} />
        <Route path="/BuyFishKoi" element={<BuyFishKoi />} />
        <Route path="/BuyShopFish" element={<BuyShopFish />} />
        <Route path="/compare-fish" element={<CompareFish />} />
        <Route path="/searchpage" element={<SearchPage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/feedBackPage" element={<FeedbackPage />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/customerProfilePage" element={<CustomerProfilePage />} />

        {/* Admin Routes with Side Menu */}
        <Route path="/adminlogin" element={<AdminLoginPage />} />
        <Route path="/admin/*" element={<AdminLayout />} />
      </Routes>
    </Router>
  );
};

// Admin Layout Component that includes the Side Menu
const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <SideMenu />
      <div className="admin-content">
        <Routes>
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="order" element={<Orders />} />
          <Route path="customer" element={<Customers />} />
          <Route path="ky-gui" element={<KyGuiPage />} />
          <Route path="danh-gia" element={<DanhGiaPage />} />
          <Route path="khuyen-mai" element={<KhuyenMaiPage />} />
          <Route path="reports" element={<Reports />} />
          {/* New Routes for Settings, User Management, Payment Methods, etc. */}
          <Route path="settings" element={<SettingsPage />} />
          <Route path="user-management" element={<UserManagement />} />
          <Route path="payment-methods" element={<PaymentMethods />} />
          <Route path="shipping" element={<Shipping />} />
          <Route path="feedback" element={<FeedbackAdmin />} /> {/* Corrected this */}
        </Routes>
      </div>
    </div>
  );
};

export default App;
