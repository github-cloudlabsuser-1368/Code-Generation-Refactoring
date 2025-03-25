const readline = require('readline');
const axios = require('axios');

// Function to fetch weather data from OpenWeatherMap API
async function fetchWeather(city) {
    const apiKey = '11ab588bbc93ac63170fa0cb7f4d4251'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await axios.get(url);
        const data = response.data;
        console.log(`El clima en ${city} es ${data.weather[0].description} con una temperatura de ${data.main.temp}°C.`);
    } catch (error) {
        console.error("Error al obtener los datos del clima:", error.message);
    }
}

// Create a readline interface to get user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese una ciudad para obtener el clima: ", async (city) => {
    if (city.trim()) {
        await fetchWeather(city);
    } else {
        console.log("Entrada no válida.");
    }
    rl.close();
});
