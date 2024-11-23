import React, { useEffect, useState } from 'react';
import './kyguipage.css';
import consignedKoiData from './kyguipage.json'; // Import dữ liệu từ JSON

const KyGuiPage = () => {
  const [consignedKoi, setConsignedKoi] = useState([]);
  const [selectedKoi, setSelectedKoi] = useState(null); // Trạng thái để lưu cá koi đang chọn xem chi tiết
  const [isModalOpen, setIsModalOpen] = useState(false); // Trạng thái mở modal

  useEffect(() => {
    // Đặt dữ liệu đã import vào state
    setConsignedKoi(consignedKoiData);
  }, []);

  // Xử lý xóa cá
  const handleDelete = (index) => {
    const updatedKoiList = consignedKoi.filter((_, i) => i !== index);
    setConsignedKoi(updatedKoiList);
  };

  // Mở modal để xem chi tiết
  const handleViewDetails = (koi) => {
    setSelectedKoi(koi);
    setIsModalOpen(true);
  };

  // Đóng modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedKoi(null);
  };

  return (
    <div className="page-content">
      <h1>Ký Gửi</h1>
      <p>Chào mừng bạn đến với trang Ký Gửi. Đây là nơi bạn có thể đăng ký gửi cá koi của mình cho shop chúng tôi bán lại. Chúng tôi cam kết mang lại giá trị tốt nhất cho bạn!</p>

      <h2>Các Cá Koi Được Gửi</h2>
      <div className="koi-cards">
        {consignedKoi.length > 0 ? (
          consignedKoi.map((koi, index) => (
            <div className="koi-card" key={index}>
              <div className="koi-header">
                <h3>Người Gửi: {koi.senderName}</h3>
                <button onClick={() => handleDelete(index)} className="delete-btn">Hủy</button>
              </div>
              <h4>{koi.name}</h4>
              <p>Loại: {koi.type}</p>
              <p>Tuổi: {koi.age}</p>
              <p>Kích thước: {koi.size} cm</p>
              <p>Mục đích: {koi.purpose}</p>
              <p>Địa chỉ: {koi.address}</p>
              <p>Thời gian gửi: {koi.sendTime}</p>
              <button onClick={() => handleViewDetails(koi)} className="view-btn">Xem Chi Tiết</button>
            </div>
          ))
        ) : (
          <p>Không có cá koi nào được gửi.</p>
        )}
      </div>

      {/* Modal Xem Chi Tiết */}
      {isModalOpen && selectedKoi && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Chi Tiết Cá Koi</h2>
            <table className="detail-table">
              <tbody>
                <tr>
                  <td><strong>Tên Cá:</strong></td>
                  <td>{selectedKoi.name}</td>
                </tr>
                <tr>
                  <td><strong>Loại:</strong></td>
                  <td>{selectedKoi.type}</td>
                </tr>
                <tr>
                  <td><strong>Tuổi:</strong></td>
                  <td>{selectedKoi.age}</td>
                </tr>
                <tr>
                  <td><strong>Kích Thước:</strong></td>
                  <td>{selectedKoi.size} cm</td>
                </tr>
                <tr>
                  <td><strong>Mục Đích:</strong></td>
                  <td>{selectedKoi.purpose}</td>
                </tr>
                <tr>
                  <td><strong>Địa Chỉ:</strong></td>
                  <td>{selectedKoi.address}</td>
                </tr>
                <tr>
                  <td><strong>Thời Gian Gửi:</strong></td>
                  <td>{selectedKoi.sendTime}</td>
                </tr>
              </tbody>
            </table>
            <button onClick={closeModal} className="close-btn">Đóng</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default KyGuiPage;
