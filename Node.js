const express = require('express');
const app = express();
const cors = require('cors'); // For handling CORS issues

app.use(cors());  // Enable CORS
app.use(express.json()); // To parse JSON body data

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Form Data:', name, email, message);

    // Simulate successful form submission
    res.status(200).json({ message: 'Thank you for your message!' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
