// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// Connect to MongoDB (replace 'mongodb://localhost:27017/customerProfile' with your MongoDB URI)
mongoose.connect('mongodb://localhost:27017/customerProfile', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define a schema and model for Customer Profile
const customerSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    address: String,
});

const Customer = mongoose.model('Customer', customerSchema);

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Endpoint to get customer profile
app.get('/api/customer', async (req, res) => {
    try {
        const customer = await Customer.findOne(); // Change this to fetch by ID if necessary
        res.json(customer);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching customer data' });
    }
});

// Endpoint to update or create customer profile
app.post('/api/customer', async (req, res) => {
    const { name, email, phone, address } = req.body;

    try {
        const customer = await Customer.findOneAndUpdate(
            {}, // This will update the first found customer (or create a new one if none exists)
            { name, email, phone, address },
            { new: true, upsert: true } // Creates a new document if one doesn't exist
        );
        res.json(customer);
    } catch (error) {
        res.status(500).json({ message: 'Error saving customer data' });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
