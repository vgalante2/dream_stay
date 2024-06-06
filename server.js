const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
require('dotenv').config(); // Add this line to load the dotenv package

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.error('Could not connect to MongoDB Atlas', err));

// Define the Home model
const Home = mongoose.model('Home', new mongoose.Schema({
    // Define your schema here
    name: String,
    // ... other fields
}));

app.use(cors({
  origin: 'https://dream-stay-flame.vercel.app/' // replace with your live site URL
}));

// Route handler for the root URL
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Route handler for the /homes URL
app.get('/homes', async (req, res) => {
    try {
      const homes = await Home.find();
      res.json(homes);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
});

app.listen(3000, '0.0.0.0', () => {
    console.log('Server running on http://0.0.0.0:3000');
});
