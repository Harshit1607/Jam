const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allow all origins by default
app.use(express.json());

// MongoDB Connection
const MONGODB_URI = process.env.DATABASE_URL;

mongoose.connect(MONGODB_URI)
  .then(() => console.log('Successfully connected to MongoDB.'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Models
const Info = require('./models/Info');

// Routes
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Example route to test the Info model
app.post('/info', async (req, res) => {
  try {
    const { name, phoneNumber } = req.body;
    const newInfo = new Info({ name, phoneNumber });
    await newInfo.save();
    res.status(201).json(newInfo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/info', async (req, res) => {
  try {
    const infos = await Info.find();
    res.json(infos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
