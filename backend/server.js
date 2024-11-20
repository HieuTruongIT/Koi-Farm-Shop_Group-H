const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Consignment = require('./models/consignment');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Kết nối MongoDB
mongoose.connect('mongodb://localhost:27017/koiStore', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Kết nối MongoDB thành công!'))
    .catch(err => console.log('Lỗi kết nối MongoDB:', err));


// Tạo schema và model cho dữ liệu cá Koi
const koiSchema = new mongoose.Schema({
    name: String,
    type: String,
    image: String,
});

//SearchPage
app.get('/api/koi', async (req, res) => {
    try {
        const koiList = await Koi.find();
        res.json(koiList);
    } catch (err) {
        res.status(500).send(err);
    }
});
// API để thêm một cá Koi mới
app.post('/api/koi', async (req, res) => {
    const { name, type, image } = req.body;
    const newKoi = new Koi({ name, type, image });
    try {
        await newKoi.save();
        res.status(201).json(newKoi);
    } catch (err) {
        res.status(500).send(err);
    }
});

//ConsignmentPage
app.post('/api/consignment', async (req, res) => {
    const { koiName, koiType, koiAge, koiSize, koiPurpose } = req.body;
    const newConsignment = new Consignment({
        koiName, koiType, koiAge, koiSize, koiPurpose
    });
    try {
        await newConsignment.save();
        res.status(201).json(newConsignment);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(PORT, () => {
    console.log(`Server đang chạy trên cổng ${PORT}`);
});
