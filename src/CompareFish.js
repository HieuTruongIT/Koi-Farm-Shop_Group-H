import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from './zustand/store'; // Import trạng thái từ zustand
import './CompareFish.css';

function CompareFish() {
    const navigate = useNavigate();
    const cart = useStore(state => state.cart); // Lấy dữ liệu giỏ hàng
    const [sortedCart, setSortedCart] = useState(cart);

    // Đồng bộ `sortedCart` với `cart` mỗi khi `cart` thay đổi
    useEffect(() => {
        setSortedCart(cart);
    }, [cart]);

    // Hàm sắp xếp theo tên
    const sortByName = () => {
        const sorted = [...sortedCart].sort((a, b) => a.name.localeCompare(b.name));
        setSortedCart(sorted);
    };

    // Hàm sắp xếp theo giá
    const sortByPrice = () => {
        const sorted = [...sortedCart].sort((a, b) => a.price - b.price);
        setSortedCart(sorted);
    };

    return (
        <main className="container">
            <h2>So sánh cá Koi</h2>
            <div className="sort-buttons">
                <button className="sort-button" onClick={sortByName}>Sắp xếp theo tên</button>
                <button className="sort-button" onClick={sortByPrice}>Sắp xếp theo giá</button>
            </div>
            <table className="compare-table">
                <thead>
                    <tr>
                        <th>Hình ảnh</th>
                        <th>Sản phẩm</th>
                        <th>Người bán</th>
                        <th>Giới tính</th>
                        <th>Năm sinh</th>
                        <th>Kích thước</th>
                        <th>Giống</th>
                        <th>Nguồn gốc</th>
                        <th>Giá</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedCart.map((item) => (
                        <tr key={item.id}>
                            <td><img src={item.thumbnail} alt={item.name} className="fish-image" /></td>
                            <td>{item.name}</td>
                            <td>{item.seller}</td>
                            <td>{item.gender}</td>
                            <td>{item.dob}</td>
                            <td>{item.size}</td>
                            <td>{item.fish}</td>
                            <td>{item.from}</td>
                            <td>{item.price.toLocaleString()} ₫</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="compare-btn" onClick={() => navigate('/cart')}>
                Quay về giỏ hàng
            </button>
        </main>
    );
}

export default CompareFish;
