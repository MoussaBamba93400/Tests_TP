// server.js
const express = require('express');
const mongoose = require('mongoose');
const Contact = require('./contact.model'); // Adjust the path if necessary

const app = express();
app.use(express.json());

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/contacts')
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error);
    });

app.post('/contacts', async (req, res) => {
    try {
        const contact = new Contact(req.body);
        await contact.save();
        res.status(201).send(contact);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

app.get('/contacts', async (req, res) => {
    const contacts = await Contact.find();
    res.send(contacts);
});

const PORT = 3000;
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Export the server instance for testing
module.exports = server;
