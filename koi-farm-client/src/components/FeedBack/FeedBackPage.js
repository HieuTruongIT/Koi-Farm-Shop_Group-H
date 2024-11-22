import React, { useState } from 'react';
import StarRating from '../StarRating/StarRating'; 
import './FeedBackPage.css'; 

const FeedbackPage = () => {
    const [feedback, setFeedback] = useState('');
    const [rating, setRating] = useState(0); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/feedback', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ rating, feedback }),
            });

            if (response.ok) {
                alert("Thank you for your feedback!");
                setFeedback('');
                setRating(0);
            } else {
                alert("Failed to submit feedback.");
            }
        } catch (error) {
            console.error("Error submitting feedback:", error);
            alert("An error occurred while submitting feedback.");
        }
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
            </div>

            <footer>
                <h3>Welcome to OnKoi Farm Shop</h3>
                <p>Your feedback helps us grow and serve you better.</p>
            </footer>
        </div>
    );
};

export default FeedbackPage;
