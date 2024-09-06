const express = require('express');
const app = express();
const port = 3001;

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Middleware to parse request bodies (for POST methods)
app.use(express.urlencoded({ extended: true }));

// Home route
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

// About route
app.get('/about', (req, res) => {
  res.render('about', { title: 'About Us' });
});

// Contact form route (GET method to display the form)
app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Us' });
});

// Contact form route (POST method to handle form submission)
app.post('/contact', (req, res) => {
  const { name, message } = req.body;
  res.render('thankyou', { title: 'Thank You', name, message });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
