import React from 'react';
import './PromotionsPage.css'; // Thêm CSS nếu cần thiết

function PromotionsPage() {
    // Giả lập danh sách khuyến mãi
    const promotions = [
        { id: 1, description: 'Giảm 10% cho đơn hàng từ 500.000đ', pointsRequired: 50 },
        { id: 2, description: 'Giảm 15% cho đơn hàng từ 1.000.000đ', pointsRequired: 100 },
        { id: 3, description: 'Giảm 20% cho đơn hàng từ 2.000.000đ', pointsRequired: 200 },
        { id: 4, description: 'Giảm 30% cho đơn hàng từ 2.500.000đ', pointsRequired: 300 },
    ];

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
