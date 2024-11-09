/* Global Variables */
// Personal API Key for OpenWeatherMap API
let newWeather = document.getElementById("zip");
const baseURL = "https://api.openweathermap.org/data/2.5/weather?q=";
const apiKey = "1b14c9a59e2c27e33ed684a98d4a0513";
// Create a new date instance dynamically with JS
const d = new Date();
const newDate = d.getMonth()+1 + "." + d.getDate() + "." + d.getFullYear();

document.getElementById("generate").addEventListener("click", performAction);

async function performAction() {
  // Fetching weather info
  const zipCode = document.getElementById("zip").value;

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=1b14c9a59e2c27e33ed684a98d4a0513&units=imperial`
    );
    const data = await response.json();


    const serverResponse = await fetch('http://localhost:4000/weather', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const res = await fetch('http://localhost:4000/weatherData',{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const serverData = await res.json();

    // Access the temperature from the server
    const temp = serverData.main.temp;
    console.log(temp);
    // operations with the data 
    document.getElementById("temp").innerHTML = Math.round(temp) + " degrees";
    document.getElementById("content").innerHTML = document.getElementById("feelings").value;
    document.getElementById("date").innerHTML = newDate;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};