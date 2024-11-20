const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Customer= require('./models/DashboardModel');
const Order= require('./models/DashboardModel');
const Product= require('./models/DashboardModel');
const app = express();
app.use(bodyParser.json());

// Kết nối MongoDB
mongoose.connect('mongodb://localhost:27017/dashboard', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});



// Tạo khách hàng
app.post('/api/customers', async (req, res) => {
    const customer = new Customer(req.body);
    await customer.save();
    res.json({ message: 'Customer created successfully', customer_id: customer._id });
});

// Lấy danh sách khách hàng
app.get('/api/customers', async (req, res) => {
    const customers = await Customer.find();
    res.json(customers);
});

app.get('/api/dashboard', async (req, res) => {
    const orders = await Order.find();
    const totalSales = orders.reduce((sum, order) => sum + order.total_amount, 0);
    const totalOrders = orders.length;

    // Tổng số khách hàng
    const totalCustomers = await Customer.countDocuments();

    // Tổng số sản phẩm
    const totalItems = await Product.countDocuments();

    res.json({
        total_sales: totalSales,
        total_orders: totalOrders,
        total_customers: totalCustomers,
        total_items: totalItems,
    });
});


app.get('/api/reports/stock', async (req, res) => {
    const products = await Product.find();
    res.json(products.map(p => ({
        product_id: p._id,
        name: p.Ten, 
        quantity_in_stock: p.quantity_in_stock,
    })));
});
app.get('/api/orders/recent', async (req, res) => {
    const recentOrders = await Order.find().sort({ order_date: -1 }).limit(5); // Lấy 5 đơn hàng gần nhất
    res.json(recentOrders.map(order => ({
        _id: order._id,
        customer_id: order.customer_id,
        total_amount: order.total_amount,
        order_date: order.order_date,
    })));
});



// Start server
app.listen(5000, () => console.log('Server running on http://localhost:5000'));
