import React, { useState } from 'react';
import { FaSearch, FaEye, FaTrashAlt, FaEdit, FaPhoneAlt } from 'react-icons/fa';
import './Reports.css';

const ReportPage = () => {
    const [reports, setReports] = useState([
        { id: 1, title: 'Lỗi hệ thống', description: 'Không thể truy cập vào trang sản phẩm', date: '2024-11-20', status: 'Chưa giải quyết' },
        { id: 2, title: 'Đề xuất tính năng', description: 'Thêm bộ lọc tìm kiếm cho sản phẩm', date: '2024-11-18', status: 'Đã giải quyết' },
        { id: 3, title: 'Lỗi giao hàng', description: 'Giao hàng muộn hơn 3 ngày', date: '2024-11-15', status: 'Chưa giải quyết' },
        { id: 4, title: 'Lỗi thanh toán', description: 'Không thể thanh toán khi đặt hàng', date: '2024-11-12', status: 'Đã giải quyết' },
        { id: 5, title: 'Lỗi đăng nhập', description: 'Không thể đăng nhập vào tài khoản', date: '2024-11-10', status: 'Chưa giải quyết' },
    ]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedReport, setSelectedReport] = useState(null);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleViewReport = (id) => {
        const report = reports.find(report => report.id === id);
        setSelectedReport(report);
    };

    const handleDeleteReport = (id) => {
        setReports(reports.filter(report => report.id !== id));
    };

    const handleEditReport = (id) => {
        // Update the status to "Đang gọi bộ phận IT"
        const updatedReports = reports.map(report => 
            report.id === id ? { ...report, status: 'Đang gọi bộ phận IT' } : report
        );
        setReports(updatedReports);

        // Update selected report to display the "calling IT" message
        const report = updatedReports.find(report => report.id === id);
        setSelectedReport(report);
    };

    const filteredReports = reports.filter(report =>
        report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        report.date.includes(searchTerm)
    );

    return (
        <div className="report-page">
            <h1>Trang Quản Lý Báo Cáo</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Tìm kiếm báo cáo..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <button className="search-btn"><FaSearch /></button>
            </div>
            <table className="report-table">
                <thead>
                    <tr>
                        <th>Tiêu Đề</th>
                        <th>Mô Tả</th>
                        <th>Ngày</th>
                        <th>Trạng Thái</th>
                        <th>Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredReports.map((report) => (
                        <tr key={report.id}>
                            <td>{report.title}</td>
                            <td>{report.description}</td>
                            <td>{report.date}</td>
                            <td>
                                <span className={report.status === 'Đã giải quyết' ? 'status-solved' : 'status-unsolved'}>
                                    {report.status}
                                </span>
                            </td>
                            <td>
                                <button onClick={() => handleViewReport(report.id)} className="action-btn view-btn">
                                    <FaEye /> Xem
                                </button>
                                <button onClick={() => handleDeleteReport(report.id)} className="action-btn delete-btn">
                                    <FaTrashAlt /> Xóa
                                </button>
                                <button onClick={() => handleEditReport(report.id)} className="action-btn edit-btn">
                                    <FaEdit /> Sửa
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* View Report Modal or Table for IT Calling */}
            {selectedReport && selectedReport.status === 'Đang gọi bộ phận IT' && (
                <div className="calling-it-container">
                    <h3>Đang gọi bộ phận IT...</h3>
                    <p><FaPhoneAlt style={{ color: 'green' }} /> Đang liên hệ với bộ phận IT để sửa lỗi.</p>
                </div>
            )}

            {/* View Report Modal */}
            {selectedReport && selectedReport.status !== 'Đang gọi bộ phận IT' && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>{selectedReport.title}</h2>
                        <p><strong>Mô Tả:</strong> {selectedReport.description}</p>
                        <p><strong>Ngày:</strong> {selectedReport.date}</p>
                        <p><strong>Trạng Thái:</strong> {selectedReport.status}</p>
                        <button onClick={() => setSelectedReport(null)} className="close-btn">Đóng</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ReportPage;
