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
import CustomerProfilePage from './components/CustomerProfilePage/CustomerProfilePage'
import AdminLoginPage from './components/AdminLoginPage/AdminLoginPage';
import Menu from './components/Administrator/Menu';
import DashBoard from './components/Administrator/Dashboard';
import Inventory from './components/Administrator/Inventory';
import Orders from './components/Administrator/Orders';
import Customers from './components/Administrator/Customers';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<IntroPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/shop" element={<OnKoiShopPage />} /> 
                <Route path="/BuyFishKoi" element={<BuyFishKoi/>} /> 
                <Route path="/BuyShopFish" element={<BuyShopFish/>} /> 
                <Route path='/compare-fish' element={<CompareFish />} />
                <Route path='/searchpage' element={<SearchPage />} />
                <Route path='/registration' element={<Registration />} />
                <Route path='/feedBackPage' element={<FeedbackPage/>} />
                <Route path='/promotions' element={<Promotions />} />
                <Route path='/customerProfilePage' element={<CustomerProfilePage />} />
                <Route path='/adminlogin' element={<AdminLoginPage />} />
                <Route path='/admin/dashboard' element={<Menu />} />
                <Route path='/dashboard' element={<DashBoard />} />
                <Route path='/customer' element={<Customers />} />
                <Route path='/inventory' element={<Inventory />} />
                <Route path='/order' element={<Orders />} />
            </Routes>
        </Router>
    );
};

export default App;
