import React, { useState } from 'react';
import './Registration.css';

const ConsignmentPage = () => {
    const [koiName, setKoiName] = useState('');
    const [koiType, setKoiType] = useState('thuần chủng');
    const [koiAge, setKoiAge] = useState('');
    const [koiSize, setKoiSize] = useState('');
    const [koiPurpose, setKoiPurpose] = useState('bán');
    const [senderName, setSenderName] = useState(''); // Tên người gửi
    const [address, setAddress] = useState(''); // Địa chỉ người gửi
    const [sendTime, setSendTime] = useState(''); // Thời gian gửi
    const [consignedKoi, setConsignedKoi] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newKoi = {
            name: koiName,
            type: koiType,
            age: koiAge,
            size: koiSize,
            purpose: koiPurpose,
            senderName: senderName,  // Added sender name
            address: address,        // Added address
            sendTime: sendTime,      // Added send time
        };

        // Save to localStorage (or a backend API if necessary)
        const existingConsignmentData = JSON.parse(localStorage.getItem('consignedKoi')) || [];
        existingConsignmentData.push(newKoi);
        localStorage.setItem('consignedKoi', JSON.stringify(existingConsignmentData)); // Save to localStorage

        alert(`Gửi thành công: ${koiName}, Loại: ${koiType}, Tuổi: ${koiAge}, Kích thước: ${koiSize} cm, Mục đích: ${koiPurpose}, Người Gửi: ${senderName}, Địa chỉ: ${address}, Thời gian gửi: ${sendTime}`);

        // Reset form
        setKoiName('');
        setKoiType('thuần chủng');
        setKoiAge('');
        setKoiSize('');
        setKoiPurpose('bán');
        setSenderName('');
        setAddress('');
        setSendTime('');
    };

    return (
        <div className="consignment-page">
            <h1>Trang Ký Gửi Cá Koi</h1>
            <form onSubmit={handleSubmit} className="consignment-form">
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
                <label>
                    Tên người gửi:
                    <input type="text" value={senderName} onChange={(e) => setSenderName(e.target.value)} required />
                </label>
                <label>
                    Địa chỉ người gửi:
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
                </label>
                <label>
                    Thời gian gửi:
                    <input type="datetime-local" value={sendTime} onChange={(e) => setSendTime(e.target.value)} required />
                </label>
                <button type="submit">Gửi Cá Koi</button>
            </form>

            <div className="koi-list">
                <h2>Các Cá Koi Được Gửi</h2>
                <div className="koi-cards">
                    {consignedKoi.map((koi, index) => (
                        <div className="koi-card" key={index}>
                            <h3>{koi.name}</h3>
                            <p>Loại: {koi.type}</p>
                            <p>Tuổi: {koi.age}</p>
                            <p>Kích thước: {koi.size} cm</p>
                            <p>Mục đích: {koi.purpose}</p>
                            <p>Người gửi: {koi.senderName}</p>
                            <p>Địa chỉ: {koi.address}</p>
                            <p>Thời gian gửi: {koi.sendTime}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ConsignmentPage;
