import React, { useState, useEffect } from 'react';
import './SearchPage.css';

const koiData = [
    { id: 1, name: 'Koi 1', type: 'thuần chủng', image: 'https://onkoi.vn/wp-content/uploads/2022/04/JPD-Fujiyama-thuc-an-35-protein-vip-8-tang-truong-on-dinh-khi-koi-truong-thanh-CA06-300x300.jpg' },
    { id: 2, name: 'Koi 2', type: 'lai F1', image: 'https://onkoi.vn/wp-content/uploads/2022/04/jpd-shori-thuc-an-vip-888-45-protein-sieu-tang-mau-va-body-CA05-300x300.jpg' },
    { id: 3, name: 'Koi 3', type: 'thuần Việt', image: 'https://onkoi.vn/wp-content/uploads/2022/04/JPD-shogun-thuc-an-vip-999-protein-40-cao-cap-lam-trang-CA03-300x300.jpg' },
];

const SearchPage = () => {
    const [filter, setFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [weather, setWeather] = useState(null);
    const [unsplashImages, setUnsplashImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    const filteredKoi = koiData.filter(
        koi => 
            (filter === 'all' || koi.type === filter) && 
            koi.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() => {
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
        fetchWeather();
        fetchUnsplashImages();
    }, []);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % unsplashImages.length);
        }, 3000);

        return () => clearInterval(slideInterval);
    }, [unsplashImages]);

    return (
        <div className="search-page">
            <h1>Trang Tìm Kiếm Cá Koi</h1>

            {/* Search Box */}
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Tìm kiếm cá koi..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                />
            </div>

            {/* Filter Dropdown */}
            <div className="filter-container">
                <label className="koi-label">Chọn loại cá Koi:</label>
                <select value={filter} onChange={(e) => setFilter(e.target.value)} className="filter-select">
                    <option value="all">Tất cả</option>
                    <option value="thuần chủng">Thuần Chủng</option>
                    <option value="lai F1">Lai F1</option>
                    <option value="thuần Việt">Thuần Việt</option>
                </select>
            </div>

            {/* Koi List */}
            <div id="koi-list" className="koi-list">
                {filteredKoi.map(koi => (
                    <div key={koi.id} className="koi-item">
                        <img src={koi.image} alt={koi.name} className="koi-image" />
                        <h3>{koi.name}</h3>
                        <p>Loại: {koi.type}</p>
                    </div>
                ))}
            </div>

            {/* Weather Info */}
            {weather && (
                <div className="weather-info">
                    <h2>Thông tin thời tiết:</h2>
                    <p>Nhiệt độ: {weather.main.temp} °C</p>
                    <p>Thời tiết: {weather.weather[0].description}</p>
                </div>
            )}

            {/* Slideshow */}
            <h2>Hình ảnh cá koi được chăm sóc:</h2>
            <div className="slideshow-container">
                {unsplashImages.length > 0 && (
                    <>
                        <div className="slideshow">
                            <img
                                src={unsplashImages[currentSlide].urls.small}
                                alt={unsplashImages[currentSlide].alt_description}
                                className="slideshow-image"
                            />
                        </div>
                        <div className="slideshow-controls">
                            <button onClick={() => setCurrentSlide((currentSlide - 1 + unsplashImages.length) % unsplashImages.length)}>&lt;</button>
                            <button onClick={() => setCurrentSlide((currentSlide + 1) % unsplashImages.length)}>&gt;</button>
                        </div>
                    </>
                )}
            </div>

            {/* Footer Image */}
            <div className="botset-container">
                <img src="https://onkoi.vn/wp-content/themes/themenamewoo/images/bg_botsec1.png" alt="Botset" />
            </div>
        </div>
    );
};

export default SearchPage;
