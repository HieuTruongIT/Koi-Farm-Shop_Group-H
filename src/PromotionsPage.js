import React, { useState, useEffect } from 'react';
import './PromotionsPage.css'; // Thêm CSS nếu cần thiết

function PromotionsPage() {
    const [promotions, setPromotions] = useState([]); // Lưu trữ danh sách khuyến mãi
    const [loading, setLoading] = useState(true); // Trạng thái tải dữ liệu
    const [error, setError] = useState(null); // Trạng thái lỗi

    // Hàm gọi API từ backend
    const fetchPromotions = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/promotions'); // URL của API
            if (!response.ok) {
                throw new Error('Failed to fetch promotions');
            }
            const data = await response.json();
            setPromotions(data); // Cập nhật danh sách khuyến mãi
        } catch (err) {
            setError(err.message); // Cập nhật lỗi
        } finally {
            setLoading(false); // Kết thúc tải dữ liệu
        }
    };

    useEffect(() => {
        fetchPromotions(); // Gọi API khi component được mount
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <main className="container mx-auto py-8">
            <h1 className="text-2xl font-bold mb-6">Khuyến Mãi</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {promotions.map(promotion => (
                    <div key={promotion.id} className="bg-white text-black rounded-lg p-4 shadow-lg">
                        <p className="mb-2">{promotion.description}</p>
                        <p className="text-gray-600 mb-4">Điểm yêu cầu: {promotion.pointsRequired}</p>
                        <button className="bg-red-600 text-white px-4 py-2 rounded" disabled>
                            Đổi Điểm
                        </button>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default PromotionsPage;
