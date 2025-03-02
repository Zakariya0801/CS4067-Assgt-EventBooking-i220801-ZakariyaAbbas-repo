require('dotenv').config();
const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const PORT = process.env.PORT || 3001;

// MongoDB Connection
const client = new MongoClient(process.env.MONGO_URI);

async function connectDB() {
    try {
        await client.connect();
        console.log("✅ Connected to MongoDB");
        return client.db();
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error);
        process.exit(1);
    }
}

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static('public'));

// Home Route
app.get('/', async (req, res) => {
    const db = await connectDB();
    const eventsCollection = db.collection("events");

    const events = await eventsCollection.find().toArray();
    res.render('index', { events });
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
