const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path'); // Import the path module
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Format the current date and time
function formatDate() {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day}.${month}.${year} ${hours}:${minutes}`;
}

// Route to handle form submission
app.post('/submit-form', (req, res) => {
    const { name, email, phone, message } = req.body;
    
    // Create an object with form data
    const formData = {
        name,
        email,
        phone,
        message,
        timestamp: formatDate() // Use the custom format for timestamp
    };

    // Read existing data from the JSON file
    let formDataArray = [];
    try {
        const formDataJSON = fs.readFileSync('form_data.json', 'utf8');
        formDataArray = JSON.parse(formDataJSON);
    } catch (err) {
        console.error('Error reading form data JSON file:', err);
    }

    // Add new form data to the array
    formDataArray.push(formData);

    // Write the updated data back to the JSON file
    try {
        fs.writeFileSync('form_data.json', JSON.stringify(formDataArray, null, 2));
        console.log('Form data saved successfully.');
    } catch (err) {
        console.error('Error writing form data to JSON file:', err);
    }

    res.send('Form submitted successfully!');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
