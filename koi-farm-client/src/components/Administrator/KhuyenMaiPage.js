import React, { useState, useEffect } from 'react';
import './KhuyenMaiPage.css';

const KhuyenMaiPage = () => {
  const [promotions, setPromotions] = useState([]);
  const [newPromotion, setNewPromotion] = useState({
    title: '',
    description: '',
    validUntil: '',
    occasion: '',  // Tết Dương Lịch or Tết Âm Lịch
  });
  const [showForm, setShowForm] = useState(false); // State to toggle form visibility

  // Dữ liệu khuyến mãi giả định
  useEffect(() => {
    const promotionData = [
      {
        id: 1,
        title: "Giảm giá 20% cho cá koi thuần chủng",
        description: "Nhận ngay giảm giá 20% khi mua cá koi thuần chủng. Chương trình có hiệu lực đến hết tháng này.",
        validUntil: "2024-11-30",
        occasion: "Tết Dương Lịch"
      },
      {
        id: 2,
        title: "Tặng quà khi mua cá koi lai F1",
        description: "Mua cá koi lai F1 và nhận quà tặng đặc biệt. Chương trình áp dụng từ nay đến cuối năm.",
        validUntil: "2024-12-31",
        occasion: "Tết Âm Lịch"
      },
      {
        id: 3,
        title: "Giảm giá 10% cho đơn hàng trên 2 triệu đồng",
        description: "Giảm ngay 10% cho mọi đơn hàng từ 2 triệu đồng trở lên. Hãy nhanh tay trước khi hết hạn!",
        validUntil: "2024-12-15",
        occasion: "Tết Dương Lịch"
      },
      {
        id: 4,
        title: "Mua 1 tặng 1 cá koi lai F2",
        description: "Chương trình đặc biệt mua 1 tặng 1 cho cá koi lai F2, cơ hội tuyệt vời cho những ai yêu thích cá koi.",
        validUntil: "2024-12-25",
        occasion: "Tết Âm Lịch"
      },
      {
        id: 5,
        title: "Giảm giá 30% cho khách hàng lần đầu mua",
        description: "Ưu đãi đặc biệt giảm ngay 30% cho các khách hàng lần đầu tiên mua cá koi tại cửa hàng.",
        validUntil: "2024-12-31",
        occasion: "Tết Dương Lịch"
      },
      {
        id: 6,
        title: "Giảm giá 15% cho tất cả cá koi đỏ",
        description: "Giảm giá 15% cho tất cả cá koi đỏ, một trong những loài cá được yêu thích nhất tại cửa hàng.",
        validUntil: "2024-11-30",
        occasion: "Tết Âm Lịch"
      },
      {
        id: 7,
        title: "Giảm giá 25% cho cá koi bể 50cm trở lên",
        description: "Giảm giá 25% cho các cá koi có kích thước lớn hơn 50cm. Đặc biệt chỉ áp dụng trong tháng này.",
        validUntil: "2024-12-01",
        occasion: "Tết Dương Lịch"
      },
    ];
    setPromotions(promotionData);
  }, []);

  // Thêm khuyến mãi
  const handleAddPromotion = () => {
    const newPromo = {
      ...newPromotion,
      id: promotions.length + 1,  // Tạo ID mới cho khuyến mãi
    };
    setPromotions([...promotions, newPromo]);
    setNewPromotion({
      title: '',
      description: '',
      validUntil: '',
      occasion: ''
    });
    setShowForm(false); // Ẩn form sau khi thêm khuyến mãi
  };

  // Xóa khuyến mãi
  const handleDeletePromotion = (id) => {
    const updatedPromotions = promotions.filter((promo) => promo.id !== id);
    setPromotions(updatedPromotions);
  };

  // Cập nhật khuyến mãi
  const handleUpdatePromotion = (id) => {
    const updatedPromotions = promotions.map((promo) => 
      promo.id === id ? { ...promo, ...newPromotion } : promo
    );
    setPromotions(updatedPromotions);
    setNewPromotion({
      title: '',
      description: '',
      validUntil: '',
      occasion: ''
    });
    setShowForm(false); // Ẩn form sau khi cập nhật
  };

  return (
    <div className="page-content">
      <h1>Khuyến Mãi</h1>
      <p>Trang khuyến mãi của chúng tôi cập nhật các chương trình giảm giá và ưu đãi đặc biệt dành cho cá koi. Hãy theo dõi để không bỏ lỡ cơ hội!</p>

      <button onClick={() => setShowForm(true)} className="add-promotion-btn">Thêm Khuyến Mãi</button> {/* Nút thêm khuyến mãi */}

      {showForm && (
        <div className="promotion-form">
          <h3>Thêm Khuyến Mãi Mới</h3>
          <input 
            type="text" 
            placeholder="Tiêu đề khuyến mãi" 
            value={newPromotion.title} 
            onChange={(e) => setNewPromotion({ ...newPromotion, title: e.target.value })}
          />
          <textarea
            placeholder="Mô tả khuyến mãi"
            value={newPromotion.description}
            onChange={(e) => setNewPromotion({ ...newPromotion, description: e.target.value })}
          />
          <input 
            type="date" 
            value={newPromotion.validUntil} 
            onChange={(e) => setNewPromotion({ ...newPromotion, validUntil: e.target.value })}
          />
          <select 
            value={newPromotion.occasion} 
            onChange={(e) => setNewPromotion({ ...newPromotion, occasion: e.target.value })}
          >
            <option value="">Chọn dịp</option>
            <option value="Tết Dương Lịch">Tết Dương Lịch</option>
            <option value="Tết Âm Lịch">Tết Âm Lịch</option>
          </select>
          <button onClick={handleAddPromotion}>Thêm Khuyến Mãi</button>
        </div>
      )}

      <div className="promotions-list">
        {promotions.length > 0 ? (
          promotions.map((promotion) => (
            <div className="promotion-card" key={promotion.id}>
              <h3>{promotion.title}</h3>
              <p>{promotion.description}</p>
              <p><strong>Hạn đến: </strong>{promotion.validUntil}</p>
              <p><strong>Dịp: </strong>{promotion.occasion}</p>
              <button onClick={() => handleDeletePromotion(promotion.id)} className="delete-btn">Xóa</button>
              <button onClick={() => handleUpdatePromotion(promotion.id)} className="update-btn">Cập nhật</button>
            </div>
          ))
        ) : (
          <p>Chưa có khuyến mãi nào hiện tại.</p>
        )}
      </div>
    </div>
  );
};

export default KhuyenMaiPage;
