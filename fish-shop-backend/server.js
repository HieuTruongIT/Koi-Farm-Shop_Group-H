require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Kết nối tới MongoDB (bỏ các tùy chọn không cần thiết)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('MongoDB connection error:', error));

// Định nghĩa các routes
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

const orderRoutes = require('./routes/orderRoutes');
app.use('/api/orders', orderRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));