import React, { useState } from 'react';

const ConsignmentPage = () => {
    const [koiName, setKoiName] = useState('');
    const [koiType, setKoiType] = useState('thuần chủng');
    const [koiAge, setKoiAge] = useState('');
    const [koiSize, setKoiSize] = useState('');
    const [koiPurpose, setKoiPurpose] = useState('bán');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Ngăn chặn tải lại trang
        const koiData = {
            koiName,
            koiType,
            koiAge,
            koiSize,
            koiPurpose,
        };

        try {
            // Gửi dữ liệu tới backend
            const response = await fetch('http://localhost:5000/api/consignment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(koiData),
            });

            const result = await response.json();

            // Hiển thị thông báo thành công hoặc lỗi
            if (response.ok) {
                setMessage(`Gửi thành công: ${result.koiName}, Loại: ${result.koiType}, Tuổi: ${result.koiAge}, Kích thước: ${result.koiSize} cm, Mục đích: ${result.koiPurpose}`);
                setKoiName('');
                setKoiType('thuần chủng');
                setKoiAge('');
                setKoiSize('');
                setKoiPurpose('bán');
            } else {
                setMessage('Đã có lỗi xảy ra khi gửi dữ liệu!');
            }
        } catch (error) {
            setMessage('Đã có lỗi xảy ra khi gửi dữ liệu!');
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Trang Ký Gửi Cá Koi</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Tên cá:
                    <input type="text" value={koiName} onChange={(e) => setKoiName(e.target.value)} required />
                </label>
                <label>
                    Loại cá:
                    <select value={koiType} onChange={(e) => setKoiType(e.target.value)} required>
                        <option value="thuần chủng">Thuần Chủng</option>
                        <option value="lai F1">Lai F1</option>
                        <option value="thuần Việt">Thuần Việt</option>
                    </select>
                </label>
                <label>
                    Tuổi:
                    <input type="number" value={koiAge} onChange={(e) => setKoiAge(e.target.value)} required />
                </label>
                <label>
                    Kích thước (cm):
                    <input type="number" value={koiSize} onChange={(e) => setKoiSize(e.target.value)} required />
                </label>
                <label>
                    Mục đích:
                    <select value={koiPurpose} onChange={(e) => setKoiPurpose(e.target.value)} required>
                        <option value="bán">Bán</option>
                        <option value="chăm sóc">Chăm Sóc</option>
                    </select>
                </label>
                <button type="submit">Gửi Cá Koi</button>
            </form>

            {message && <p>{message}</p>}
        </div>
    );
};

export default ConsignmentPage;
