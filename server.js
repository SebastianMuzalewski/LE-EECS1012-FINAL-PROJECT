const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

//Middleware to parse JSON requests
app.use(express.json());

// Static html files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Route for the homepage
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'calendar.html'));
});

// Route that returns JSON data
app.get("/api/info", (req, res) => {
    res.json({
        message: "Hello from the server!",
        timestamp: new Date()
    })
});

// Route that accepts POST requests
app.post('/api/message', (req, res) => {
    const message = req.body.message;
    res.json({
        received: message,
        status: "Message received successfully!"
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

// Reminder for adding global variables