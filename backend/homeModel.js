
const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({

    isFavorited: Boolean,
    id: Number, 
    title: String,
    rating: Number,
    location: String,
    size: String,
    price: Number,
    amenities: [String], 
    info: String,
    category: String, 
    imgSrc: [String]
   
    
    });
    
    const Home = mongoose.model('Home', homeSchema);
    
    module.exports = Home;