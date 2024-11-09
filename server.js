// Setup empty JS object to act as endpoint (consider using an array/object structure)
let projectData = {};
let baseURL = "https://api.openweathermap.org/data/2.5/weather?q=";
let apiKey = "1b14c9a59e2c27e33ed684a98d4a0513";

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
const getWeather = async (newWeather) => {
  const res = await fetch(baseURL + newWeather + "&appid=" + apiKey);

  try {
    const data = await res.json();
    projectData.temp = data.main.temp;
    console.log(projectData);
  } catch (error) {
    console.log("error", error);
  }
};

app.post("/", async (req, res) => {
  const { newWeather } = req.body;
  await getWeather(newWeather);
  res.json({});
});

app.get("/weather", (req, res) => {
  res.json(projectData);
});
