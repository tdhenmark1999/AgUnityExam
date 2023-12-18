document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('location-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const location = (document.getElementById('location-input') as HTMLInputElement).value;
        getWeather(location);
    });
});

async function getWeather(location: string) {
    const apiKey = '975071f176ccdd9581e0f48e3bb93a93'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayWeather(data: any) {
    const weatherResult = document.getElementById('weather-result');

    if (data.weather) {
        // Get the icon code from the API response
        const iconCode = data.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`; // Construct the URL for the icon

        // Set weather information with icon
        weatherResult.innerHTML = `
            <img src="${iconUrl}" alt="Weather Icon">
            <h3 class='text-weather'>Weather for ${data.name}</h3>
            <p class='text-temp'><strong>Temperature:</strong> ${(data.main.temp - 273.15).toFixed(2)}°C</p>
            <p class='text-condition'><strong>Condition:</strong> ${data.weather[0].description}</p>
        `;
        weatherResult.style.display = 'block';
    } else {
        weatherResult.innerHTML = '<p>Weather information not available.</p>';
        weatherResult.style.display = 'block';
    }
}

