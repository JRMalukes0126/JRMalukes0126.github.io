function getWeather() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showWeather, showError);
    } else {
        alert('Geolocation is not supported by this browser.');
    }
}

function showWeather(position) {
    const apiKey = 'f9349e13ca8f001ba306eda872cbc8a4';
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const weatherUrl = https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey};

    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp -273.15;
            const weatherDescription = data.weather[0].description;

            const locationDataElement = document.getElementById('location-data');
            locationDataElement.innerHTML = `<p>Your location: Latitude ${latitude}, Longitude ${longitude}</p>
                                            <p>Temperature: ${temperature.toFixed(1)}°C</p>
                                            <p>Weather: ${weatherDescription}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function showError(error) {
    // Handle geolocation errors (same as in the previous example)
}
