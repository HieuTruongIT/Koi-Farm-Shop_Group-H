const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Feedback = require('./models/Feedback');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/feedbackDB', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("MongoDB connection error:", error));

// API 
app.post('/api/feedback', async (req, res) => {
    const { rating, feedback } = req.body;

    try {
        // Create and save the feedback
        const newFeedback = new Feedback({ rating, feedback });
        const savedFeedback = await newFeedback.save();
        res.status(201).json(savedFeedback);
    } catch (error) {
        res.status(500).json({ error: "Failed to save feedback." });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
