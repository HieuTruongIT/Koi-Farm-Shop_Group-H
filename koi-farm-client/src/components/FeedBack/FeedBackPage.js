import React, { useState } from 'react';
import StarRating from '../StarRating/StarRating'; 
import './FeedBackPage.css'; 

const FeedbackPage = () => {
    const [feedback, setFeedback] = useState('');
    const [rating, setRating] = useState(0); 
    const [successMessage, setSuccessMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Hiển thị thông báo gửi phản hồi thành công
        setSuccessMessage(true);

        // Reset form sau khi gửi
        setFeedback('');
        setRating(0);

        // Ẩn thông báo sau 3 giây
        setTimeout(() => setSuccessMessage(false), 3000);
    };

    return (
        <div>
            <header className="thank-you-section">
                <h2>Thank you for choosing our services!</h2>
                <p>Your feedback helps us improve our products.</p>
            </header>

            <div className="feedback-container"> 
                <h1>Đánh Giá và Phản Hồi</h1>
                <form onSubmit={handleSubmit}>
                    <StarRating onRatingChange={setRating} />
                    <label>
                        Phản hồi:
                        <textarea
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                            required
                        />
                    </label>
                    <button type="submit">Gửi Phản Hồi</button>
                </form>
                {successMessage && (
                    <div className="success-banner">Gửi phản hồi thành công!</div>
                )}
            </div>

            <footer>
                <h3>Welcome to OnKoi Farm Shop</h3>
                <p>Your feedback helps us grow and serve you better.</p>
            </footer>
        </div>
    );
};

export default FeedbackPage;
