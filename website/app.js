/* Global Variables */
// Personal API Key for OpenWeatherMap API

let baseURL = 'http://api.openweathermap.org/geo/1.0/zip?zip='
let apiKey = '1b14c9a59e2c27e33ed684a98d4a0513';
const newWeather =  document.getElementById('zip').value;

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){  
  getWeather(baseURL,newWeather, apiKey)
}


const getWeather = async (baseURL, animal, key)=>{
// Fetching Latitude and Longitude from the first api
  const res = await fetch('http://api.openweathermap.org/geo/1.0/zip?zip='+document.getElementById('zip').value+'&limit=1&appid='+'1b14c9a59e2c27e33ed684a98d4a0513')
  try {

    const data = await res.json();
    console.log(data)
// Using fetched data to fetch weather info
    const latitude = data.lat;
    const longitude = data.lon;
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    fetch(weatherApiUrl)
        .then(res => res.json())
        .then(data => {
        console.log(data);   
 // This will print the detailed weather information
  })
  const retrieveData = async () =>{
    const req = await fetch('/');
    try {
    // Transform into JSON
    const Data = await req.json()
    console.log(Data)
    // Write updated data to DOM elements
    document.getElementById('temp').innerHTML = Math.round(Data.temp)+ 'degrees';
    document.getElementById('content').innerHTML = Data.feel;
    document.getElementById("date").innerHTML =Data.date;
    }
    catch(error) {
      console.log("error", error);
      // appropriately handle the error
    }
   }
  }  catch(error) {
    // appropriately handle the error
    console.log("error", error);
  }
  
}

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();