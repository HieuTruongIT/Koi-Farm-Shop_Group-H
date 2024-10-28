const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/customerProfile', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

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

app.get('/api/customer', async (req, res) => {
    try {
        const customer = await Customer.findOne(); 
        res.json(customer);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching customer data' });
    }
});

app.post('/api/customer', async (req, res) => {
    const { name, email, phone, address } = req.body;

    try {
        const customer = await Customer.findOneAndUpdate(
            {}, 
            { name, email, phone, address },
            { new: true, upsert: true } 
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
