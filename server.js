// Setup empty JS object to act as endpoint (consider using an array/object structure)
let projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 3000;
const server = app.listen(port, () =>
  console.log(`running on localhost: ${port}`)
);

// GET route server side - Returns projectData (modify to return specific data)
app.get('/', (req, res) => {
  res.json(projectData);
});

// POST route server side - Receives weather data and updates projectData
app.post('/', (req, res) => {
    const { feelings } = req.body;
    projectData.feelings = feelings;
  
    // You might want to store this data in a database or log it here
    console.log(projectData);})