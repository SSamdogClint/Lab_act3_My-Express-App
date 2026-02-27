const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
})

app.use(express.json()); // Middleware to parse JSON bodies
// Serve static files from the 'public' folder
app.use(express.static('public')); 

//Define a route for the home page
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/about', (req, res) => {
  res.send('About Us');
});

app.post('/submit', (req, res) => {
    const data = req.body;
    res.send(`Received: ${JSON.stringify(data)}`);
});

//Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});