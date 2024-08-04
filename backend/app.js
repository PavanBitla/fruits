// app.js

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 8080;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/fruits', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
});

// Define a schema
const fruitSchema = new mongoose.Schema({
  name: String,
  short_description: String,
  long_description: String,
  link: String,
  image_url: String,
  benefits: [String],
  calories_per_100g: Number,
  season: String,
  varieties: [String],
  similar_fruits: [String],
}, { collection: 'list' });

// Create a model
const Fruit = mongoose.model('Fruit', fruitSchema);

// Define a route to retrieve all fruits
app.get('/fruits', async (req, res) => {
  try {
    const fruits = await Fruit.find();
    res.json(fruits);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
