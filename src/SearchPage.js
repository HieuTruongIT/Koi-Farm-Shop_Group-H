import React, { useState, useEffect } from 'react'; 

const SearchPage = () => {
    const [filter, setFilter] = useState('all');
    const [weather, setWeather] = useState(null);
    const [unsplashImages, setUnsplashImages] = useState([]); 
    const [koiData, setKoiData] = useState([]);  // Lưu trữ dữ liệu cá koi từ backend


    const filteredKoi = koiData.filter(koi => filter === 'all' || koi.type === filter);

    useEffect(() => {
        const fetchKoiData = async () => {
            const response = await fetch('http://localhost:5000/api/koi');
            const data = await response.json();
            setKoiData(data);
        };
        const fetchWeather = async () => {
            const apiKey = "96145e3e6323eb7f9ae157c7e3fcfdae";
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Hanoi&appid=${apiKey}&units=metric`);
            const data = await response.json();
            setWeather(data);
        };
        const fetchUnsplashImages = async () => {
            const unsplashKey = "_DZNVk8O4n6pDUdp8FbwTk7VSvYRH_i-r0DPbpD_82w";
            const response = await fetch(`https://api.unsplash.com/photos/random?query=koi&count=5&client_id=${unsplashKey}`);
            const data = await response.json();
            setUnsplashImages(data); 
        };
        fetchKoiData();
        fetchWeather();
        fetchUnsplashImages();

    }, []);

    return (
        <div>
            <h1>Trang Tìm Kiếm Cá Koi</h1>
            <div className="filter-container">
                <label className="koi-label">Chọn loại cá Koi:</label>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="all">Tất cả</option>
                    <option value="thuần chủng">Thuần Chủng</option>
                    <option value="lai F1">Lai F1</option>
                    <option value="thuần Việt">Thuần Việt</option>
                </select>
            </div>
            <div id="koi-list">
                {filteredKoi.map(koi => (
                    <div key={koi.id} className="koi-item">
                        <img src={koi.image} alt={koi.name} />
                        <h3>{koi.name}</h3>
                        <p>Loại: {koi.type}</p>
                    </div>
                ))}
                 </div>
            {weather && (
                <div className="weather-info">
                    <h2>Thông tin thời tiết:</h2>
                    <p>Nhiệt độ: {weather.main.temp} °C</p>
                    <p>Thời tiết: {weather.weather[0].description}</p>
            </div>       
            )}    
            <h2>Hình ảnh cá koi được chăm sóc :</h2>
            <div className="unsplash-images">
                {unsplashImages.map(image => (
                    <img key={image.id} src={image.urls.small} alt={image.alt_description} />
                ))}
                </div>
             <div className="botset-container">
                <img src="https://onkoi.vn/wp-content/themes/themenamewoo/images/bg_botsec1.png" alt="Botset" />
            </div>
        </div>
    
    );
};

export default SearchPage;
