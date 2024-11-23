import React, { useState, useEffect } from 'react';
import './SearchPage.css';

const koiData = [
    { id: 1, name: 'Koi Ruby', type: 'thuần chủng', region: 'Hồ Chí Minh', price: '2,500,000', image: require('../../assets/koi1.jpg') },
    { id: 2, name: 'Koi Sapphire', type: 'lai F1', region: 'Hà Nội', price: '3,200,000', image: require('../../assets/koi2.jpg') },
    { id: 3, name: 'Koi Emerald', type: 'thuần Việt', region: 'Đà Nẵng', price: '1,800,000', image: require('../../assets/koi3.jpg') },
    { id: 4, name: 'Koi Gold', type: 'thuần chủng', region: 'Hồ Chí Minh', price: '4,000,000', image: require('../../assets/koi4.jpg') },
    { id: 5, name: 'Koi Diamond', type: 'lai F1', region: 'Hà Nội', price: '3,500,000', image: require('../../assets/koi5.jpg') },
    { id: 6, name: 'Koi Opal', type: 'thuần Việt', region: 'Đà Nẵng', price: '2,700,000', image: require('../../assets/koi6.jpg') },
    { id: 7, name: 'Koi Topaz', type: 'thuần chủng', region: 'Hồ Chí Minh', price: '3,000,000', image: require('../../assets/koi7.jpg') },
    { id: 8, name: 'Koi Onyx', type: 'lai F1', region: 'Hà Nội', price: '2,800,000', image: require('../../assets/koi8.jpg') },
    { id: 9, name: 'Koi Amber', type: 'thuần Việt', region: 'Đà Nẵng', price: '1,900,000', image: require('../../assets/koi9.jpg') },
    { id: 10, name: 'Koi Quartz', type: 'thuần chủng', region: 'Hồ Chí Minh', price: '4,200,000', image: require('../../assets/koi10.jpg') },
    { id: 11, name: 'Koi Sunstone', type: 'lai F1', region: 'Hà Nội', price: '3,100,000', image: require('../../assets/koi11.jpg') },
    { id: 12, name: 'Koi Amethyst', type: 'thuần chủng', region: 'Đà Nẵng', price: '3,300,000', image: require('../../assets/koi1.jpg') },
    { id: 13, name: 'Koi Obsidian', type: 'thuần Việt', region: 'Hồ Chí Minh', price: '2,200,000', image: 'https://onkoi.vn/wp-content/uploads/2021/03/onkoi-karashi-5-tuoi-90-cm-010-300x300.jpg' },
    { id: 14, name: 'Koi Citrine', type: 'lai F1', region: 'Hà Nội', price: '2,600,000', image: 'https://onkoi.vn/wp-content/uploads/2021/03/KOI-SHOWA-050.jpg' },
    { id: 15, name: 'Koi Jade', type: 'thuần chủng', region: 'Đà Nẵng', price: '2,500,000', image: 'https://onkoi.vn/wp-content/uploads/2021/03/onkoi-asagi-80-cm-4-tuoi-010-300x300.jpg' },
    { id: 16, name: 'Koi Tiger', type: 'lai F1', region: 'Hồ Chí Minh', price: '3,400,000', image: 'https://onkoi.vn/wp-content/uploads/2021/03/onkoi-asagi-30-cm-2-tuoi-012-300x300.jpg' },
    { id: 17, name: 'Koi Platinum', type: 'thuần Việt', region: 'Hà Nội', price: '3,600,000', image: 'https://onkoi.vn/wp-content/uploads/2021/03/onkoi-shusui-65-cm-2-tuoi-014-300x300.jpg' },
    { id: 18, name: 'Koi Coral', type: 'thuần chủng', region: 'Đà Nẵng', price: '3,100,000', image: 'https://onkoi.vn/wp-content/uploads/2021/03/onkoi-shusui-80-cm-4-tuoi-013-300x300.jpg' },
    { id: 19, name: 'Koi Peridot', type: 'lai F1', region: 'Hồ Chí Minh', price: '2,900,000', image: 'https://onkoi.vn/wp-content/uploads/2021/03/onkoi-shusui-58-cm-2-tuoi-300x300.jpg' },
    { id: 20, name: 'Koi Malachite', type: 'thuần Việt', region: 'Hà Nội', price: '2,800,000', image: 'https://onkoi.vn/wp-content/uploads/2021/03/onkoi-sanke-76-cm-4-tuoi-012-300x300.jpg' }
];

const SearchPage = () => {
    const [filter, setFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [weather, setWeather] = useState(null);
    const [unsplashImages, setUnsplashImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    const filteredKoi = koiData.filter(
        koi =>
            (filter === 'all' || koi.type === filter || koi.region.toLowerCase().includes(searchQuery.toLowerCase()) || koi.name.toLowerCase().includes(searchQuery.toLowerCase()))
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
                        <h3 className="koi-name">{koi.name}</h3>
                        <p>Loại: {koi.type}</p>
                        <p>Giá: {koi.price} VND</p>
                        <p>Vùng miền: {koi.region}</p>
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
