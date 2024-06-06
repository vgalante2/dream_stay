require('dotenv').config();
const mongoose = require('mongoose');
const Home = require('./homeModel.js');
const homesData = require('../frontend/src/components/homes.json');

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Insert the JSON data into MongoDB
(async () => {

    try {
        const docs = await Home.insertMany(homesData);
        console.log("data imported successfully", docs);
    } catch (err) { 
        console.log("There was an error", err);
    } finally {
        mongoose.connection.close();
    }

})();
