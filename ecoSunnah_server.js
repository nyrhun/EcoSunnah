const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Route to handle form submission
app.post('/submit_contact', (req, res) => {
    const { name, email, message } = req.body;

    // Simulate saving the data or processing it
    console.log(`Received contact form data: ${name}, ${email}, ${message}`);

    // Send a JSON response
    res.json({ status: 'success', message: 'Message sent successfully.' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
