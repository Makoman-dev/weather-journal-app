/* Global Variables */
// Personal API Key for OpenWeatherMap API

let baseURL = 'https://api.openweathermap.org/data/2.5/weather?q='
let apiKey = '1b14c9a59e2c27e33ed684a98d4a0513';
let newWeather = document.getElementById('zip').value;

document.getElementById('generate').addEventListener('click', performAction);

async function performAction(){  

// Fetching weather info
  const getWeather = (baseURL, apiKey) => {
  getWeather(baseURL,document.getElementById('zip').value, apiKey)}
  const res = await fetch(baseURL+document.getElementById('zip').value+'&appid='+apiKey)
  
  try {

    const data = await res.json();
    console.log(data)
    document.getElementById('temp').innerHTML = Math.round(data.temp)+ 'degrees';
    document.getElementById('content').innerHTML = data.feel;
    document.getElementById('date').innerHTML =data.date;
    }
    catch(error) {
      console.log("error", error);
      // appropriately handle the error
    }
}

let input = document.getElementById('feelings').value

fetch(baseURL+document.getElementById('zip').value+'&appid='+apiKey, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(input)
})
.then(response => response.json())
.then(input => console.log(input))
.catch(error => console.error('Error:',   
 error));

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();