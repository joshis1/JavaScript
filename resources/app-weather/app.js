"use strict";

window.addEventListener('load', ()=> {
    let long;
    let lat;

   /**https://openweathermap.org API*/

    if(navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(position => {
           console.log(position);
           long = position.coords.longitude;
           lat = position.coords.latitude;
           const apikey = '';
           //api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
           const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apikey}`;
           console.log('Shreyas..check uri')
           console.log(api);
           fetch(api) 
           .then(response => {
              return response.json();
           }).then(data => {
              const {feels_like, temp} = data.main;
              console.log('feeling')
              console.log(feels_like);
              console.log(temp);
              //set DOM ELements from the API.
               console.log(data);
               console.log(data.name);
               console.log(data.main.temp);
               let current_city = data.name;
               let temperature = temp - 273.15;  //Kelvin to Celsius
               updateLocalWeather(current_city, temperature.toFixed(2));
           })

       });

    }
    else {
        h1.textContent = "Please enable the geolocation"

    }
});

searchButton.addEventListener('click', searchWeather);

function searchWeather() {
  loadingText.style.display = 'block';
  weatherBox.style.display = 'none'
  let cityName = searchCity.value;
  console.log(cityName);
  if( cityName.trim().length == 0 ) {
      return alert('Please enter the city name');
  }

  var http = new XMLHttpRequest();
  var apikey = '';
  //api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
  console.log('print the url')
  const url = 'http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid='+apikey;
  console.log(url);
  var method = 'GET';
  console.log('opening the API end point');
  http.open(method, url);

  http.onreadystatechange  = function() {
    if(http.readyState == XMLHttpRequest.DONE && http.status === 200 ) {
        var data = JSON.parse(http.responseText);
        console.log(data);
        var weatherData = new Weather(cityName, data.weather[0].description.toUpperCase());
        weatherData.temperature = data.main.temp;
        updateIcon(data.weather[0].icon);
        updateWeather(weatherData);
    }
    else if( http.readyState === XMLHttpRequest.DONE) {
        alert('Something went wrong');
    }
  };

  http.send();

}

function updateWeather(weatherData) {
  weatherCity.textContent = weatherData.cityName;
  //weatherDescription.textContent = weatherData.description;
  weatherTemperature.textContent = weatherData.temperature;
  loadingText.style.display = 'none';
  weatherBox.style.display = 'block';
  temperatureSpan.textContent = "C";

}

function updateLocalWeather(current_city, temperature) {
  currentCity.textContent = current_city;
  console.log('Shreyas..current city');
  console.log(current_city);
  console.log(current_temperature);
  current_temperature.textContent = temperature;

}

function updateIcon(icon)
{
  locationIcon.innerHTML = `<img src="icons/${icon}.png">`;
}

degreeSection.addEventListener('click', () => {
    if( temperatureSpan.textContent === "C")
    {
      console.log('It is celsius');
      let temperature = weatherTemperature.textContent;
      let temperature_f =  (((temperature *9)/5) + 32).toFixed(2);
      console.log(temperature_f);
      //temperature_f = temperature_f + 32;
      console.log(temperature_f);
      weatherTemperature.textContent = temperature_f;
      temperatureSpan.textContent = "F";
    }
    else
    {
       console.log('It is Fahrenheit');
       let temperature = weatherTemperature.textContent;
       console.log(temperature);
       let temperature_c = (((temperature - 32)/9)*5).toFixed(2);
       weatherTemperature.textContent = temperature_c;
       console.log(temperature_c);
       temperatureSpan.textContent = "C";
    }
});
