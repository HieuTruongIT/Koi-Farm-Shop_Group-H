const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Lấy danh sách sản phẩm
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Thêm sản phẩm mới
router.post('/', async (req, res) => {
  const { name, price, image, description } = req.body;
  const product = new Product({ name, price, image, description });

  try {
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
