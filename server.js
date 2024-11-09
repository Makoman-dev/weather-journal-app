// Setup empty JS object to act as endpoint (consider using an array/object structure)
let projectData = {};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
const { default: test } = require("node:test");
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

// Setup Server
const port = 4000;
const server = app.listen(port, () =>
  console.log(`running on localhost: ${port}`)
);

app.post("/weather", async (req, res) => {
  projectData = req.body;
  res.json({});
});

app.get('/weatherData', (req, res) => {
  res.json(projectData);
});

