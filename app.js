// app.js

const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Define a route to serve the HTML file.
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/employee', (req, res) => {
    const currentDate = new Date().toLocaleString();
    res.render('employee',{currentDate});
   
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
