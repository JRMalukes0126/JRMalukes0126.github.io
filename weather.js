document.addEventListener('DOMContentLoaded', function () {
    
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
       
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
  
       
        getWeather(latitude, longitude);
      }, function (error) {
       
        console.error('Error getting location:', error.message);
        displayWeatherError();
      });
    } else {
     
      console.error('Geolocation is not supported.');
      displayWeatherError();
    }
  });
  
  function getWeather(latitude, longitude) {
   
    const apiKey = '3aa516bb406a24e62935ee8df4256ac3';
    const apiUrl = https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric;
  
   
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        
        displayWeather(data);
      })
      .catch(error => {
        
        console.error('Error fetching weather data:', error.message);
        displayWeatherError();
      });
  }
  
  function displayWeather(weatherData) {
    const weatherInfoElement = document.getElementById('weather-info');
  
    
    const temperature = weatherData.main.temp;
    const description = weatherData.weather[0].description;
    const location = weatherData.name;
  
    const weatherText = Current weather in ${location}: ${temperature}°C, ${description}.;
  
    weatherInfoElement.textContent = weatherText;
  }
  
  function displayWeatherError() {
    const weatherInfoElement = document.getElementById('weather-info');
    weatherInfoElement.textContent = 'Unable to fetch weather information.';
  }
