const express = require('express');
const Order = require('../models/Order');
const Product = require('../models/Product');
const router = express.Router();

// Tạo đơn hàng mới
router.post('/', async (req, res) => {
  const { products } = req.body;
  let total = 0;

  try {
    // Tính tổng tiền và kiểm tra sản phẩm
    for (let item of products) {
      const product = await Product.findById(item.productId);
      if (product) {
        total += product.price * item.quantity;
      }
    }

    const order = new Order({ products, total });
    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
