import React, { useState } from 'react';
import { FaCheckCircle, FaTrashAlt, FaReply } from 'react-icons/fa';
import './DanhGiaPage.css';

const DanhGiaPage = () => {
    const [reviews, setReviews] = useState([
        { id: 1, name: 'Trương Trọng Hiếu', stars: 5, content: 'Cá rất khỏe và đẹp, sẽ tiếp tục ủng hộ.', date: '2024-11-20', status: 'Chưa đọc', response: '' },
        { id: 2, name: 'Trần Minh Tuấn', stars: 5, content: 'Rất hài lòng với dịch vụ và chất lượng.', date: '2024-11-18', status: 'Đã đọc', response: 'Cảm ơn bạn đã ủng hộ!' },
        { id: 3, name: 'Lê Hải Quang', stars: 3, content: 'Cần cải thiện thời gian giao hàng.', date: '2024-11-15', status: 'Chưa đọc', response: '' },
        { id: 4, name: 'Nguyễn Thị Lan', stars: 5, content: 'Sản phẩm rất đẹp, dịch vụ xuất sắc!', date: '2024-11-10', status: 'Chưa đọc', response: '' },
        { id: 5, name: 'Phan Minh Nhân', stars: 2, content: 'Cá koi không khỏe mạnh khi nhận hàng.', date: '2024-11-05', status: 'Đã đọc', response: 'Xin lỗi về sự cố này, chúng tôi sẽ cải thiện.' },
        { id: 6, name: 'Lê Thị Kim', stars: 4, content: 'Dịch vụ tốt, giao hàng nhanh chóng.', date: '2024-11-01', status: 'Chưa đọc', response: '' },
        { id: 7, name: 'Trần Minh Hoàng', stars: 5, content: 'Chất lượng tuyệt vời, sẽ quay lại mua thêm.', date: '2024-10-30', status: 'Đã đọc', response: 'Cảm ơn bạn đã tin tưởng chúng tôi!' },
        { id: 8, name: 'Đặng Quốc Duy', stars: 3, content: 'Cá đẹp nhưng không đúng với mô tả.', date: '2024-10-25', status: 'Chưa đọc', response: '' },
        { id: 9, name: 'Nguyễn Thanh Mai', stars: 5, content: 'Dịch vụ rất nhanh chóng và chuyên nghiệp.', date: '2024-10-22', status: 'Đã đọc', response: 'Rất vui khi nhận được sự hài lòng từ bạn!' },
        { id: 10, name: 'Hoàng Tuấn Kiệt', stars: 4, content: 'Cá đẹp, tuy nhiên có vài con bị bệnh.', date: '2024-10-20', status: 'Chưa đọc', response: '' },
        { id: 11, name: 'Phan Minh Tuấn', stars: 4, content: 'Giao hàng đúng hẹn, cá rất đẹp.', date: '2024-10-18', status: 'Đã đọc', response: 'Cảm ơn bạn đã phản hồi!' },
        { id: 12, name: 'Vũ Lan Anh', stars: 3, content: 'Sản phẩm không đúng như hình ảnh quảng cáo.', date: '2024-10-15', status: 'Chưa đọc', response: '' },
        { id: 13, name: 'Hoàng Thị Bích', stars: 5, content: 'Tôi rất hài lòng về dịch vụ, sẽ tiếp tục mua thêm.', date: '2024-10-10', status: 'Đã đọc', response: 'Cảm ơn bạn rất nhiều!' },
        { id: 14, name: 'Lê Thanh Duy', stars: 4, content: 'Cá rất đẹp, nhưng giao hàng hơi lâu.', date: '2024-10-05', status: 'Chưa đọc', response: '' },
        { id: 15, name: 'Nguyễn Minh Tuấn', stars: 5, content: 'Tôi rất hài lòng với chất lượng cá koi của bạn.', date: '2024-10-02', status: 'Đã đọc', response: 'Cảm ơn bạn đã ủng hộ chúng tôi!' },
        { id: 16, name: 'Trần Thị Mộc', stars: 2, content: 'Cá chết sau vài ngày sử dụng, cần cải thiện chất lượng.', date: '2024-09-30', status: 'Chưa đọc', response: '' },
        { id: 17, name: 'Phan Minh Thành', stars: 4, content: 'Sản phẩm tốt nhưng có một số vấn đề về bao bì.', date: '2024-09-28', status: 'Đã đọc', response: 'Chúng tôi sẽ cải thiện bao bì trong lần tới!' },
        { id: 18, name: 'Lê Lan Hoa', stars: 5, content: 'Dịch vụ tuyệt vời, tôi rất hài lòng với sản phẩm.', date: '2024-09-25', status: 'Chưa đọc', response: '' },
        { id: 19, name: 'Nguyễn Tuấn Kiệt', stars: 3, content: 'Giá hơi cao so với chất lượng.', date: '2024-09-20', status: 'Đã đọc', response: 'Chúng tôi sẽ xem xét lại giá cả.' },
        { id: 20, name: 'Vũ Minh Trí', stars: 5, content: 'Tôi rất hài lòng với mọi thứ, sẽ giới thiệu cho bạn bè.', date: '2024-09-15', status: 'Chưa đọc', response: '' }
    ]);

    const [currentResponse, setCurrentResponse] = useState('');
    const [activeReviewId, setActiveReviewId] = useState(null);

    const markAsRead = (id) => {
        setReviews(reviews.map(review => review.id === id ? { ...review, status: 'Đã đọc' } : review));
    };

    const deleteReview = (id) => {
        setReviews(reviews.filter(review => review.id !== id));
    };

    const sendResponse = (id) => {
        setReviews(reviews.map(review =>
            review.id === id ? { ...review, response: currentResponse, status: 'Đã đọc' } : review
        ));
        setCurrentResponse('');
        setActiveReviewId(null);
    };

    return (
        <div className="review-management">
            <h1>Quản Lý Đánh Giá</h1>
            <table className="review-table">
                <thead>
                    <tr>
                        <th>Tên</th>
                        <th>Số Sao</th>
                        <th>Nội Dung</th>
                        <th>Ngày</th>
                        <th>Trạng Thái</th>
                        <th>Phản Hồi</th>
                        <th>Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    {reviews.map(review => (
                        <tr key={review.id}>
                            <td>{review.name}</td>
                            <td>{'★'.repeat(review.stars) + '☆'.repeat(5 - review.stars)}</td>
                            <td>{review.content}</td>
                            <td>{review.date}</td>
                            <td>
                                <span className={review.status === 'Đã đọc' ? 'status-read' : 'status-unread'}>
                                    {review.status}
                                </span>
                            </td>
                            <td>
                                {review.response ? (
                                    <p className="response">{review.response}</p>
                                ) : (
                                    activeReviewId === review.id ? (
                                        <div className="response-input">
                                            <textarea
                                                placeholder="Nhập phản hồi..."
                                                value={currentResponse}
                                                onChange={(e) => setCurrentResponse(e.target.value)}
                                            />
                                            <button onClick={() => sendResponse(review.id)} className="action-btn send-btn">
                                                <FaReply /> Gửi
                                            </button>
                                        </div>
                                    ) : (
                                        <button onClick={() => setActiveReviewId(review.id)} className="action-btn respond-btn">
                                            <FaReply /> Phản hồi
                                        </button>
                                    )
                                )}
                            </td>
                            <td>
                                <button onClick={() => markAsRead(review.id)} className="action-btn read-btn">
                                    <FaCheckCircle /> Đã đọc
                                </button>
                                <button onClick={() => deleteReview(review.id)} className="action-btn delete-btn">
                                    <FaTrashAlt /> Xóa
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DanhGiaPage;
