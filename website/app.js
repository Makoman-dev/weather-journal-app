/* Global Variables */
// Personal API Key for OpenWeatherMap API
let newWeather = document.getElementById("zip");
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

document.getElementById("generate").addEventListener("click", performAction);

async function performAction() {
  // Fetching weather info
  fetch("http://localhost:4000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ newWeather: newWeather.value }),
  }).then(async () => {
    const res = await fetch("http://localhost:4000/weather", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { temp } = await res.json();
    console.log(temp);
    document.getElementById("temp").innerHTML = Math.round(temp) + " degrees";
    // fix the label area
    document.getElementById("content").innerHTML =
      document.getElementById("feelings").value;
    // fix the date
    document.getElementById("date").innerHTML = newDate;
  });
}
