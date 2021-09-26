//Feature 1
function showTime(time) {
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let currentTime = document.querySelector("#current-time");
  if (minutes < 10) {
    minutes = "0" + minutes;
  } else {
  }
  currentTime.innerHTML = `${hours}:${minutes}`;
}

function showDay(day) {
  let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let currentDay = days[currentDate.getDay()];
  let currentDayText = `${currentDay}`;
  let dayText = document.querySelector("#current-day");
  dayText.innerHTML = currentDayText;
}

let currentDate = new Date();
showTime();
showDay();

//search engine task cont.
function showNewWeather(weatherInfo) {
  let newWeatherInfo = Math.round(weatherInfo.data.main.temp);
  let newWeatherText = document.querySelector("#mainTemp-number");
  newWeatherText.innerHTML = `${newWeatherInfo}`;
}

//Feature 2
function citySearch() {
  event.preventDefault();
  let locationInput = document.querySelector("#city-search");
  let currentCity = locationInput.value;
  let newCity = document.querySelector("#city-location");
  newCity.innerHTML = `${locationInput.value}`;
  //Search Engine Task
  let apiCity = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${apiKey}&units=metric`;
  axios.get(apiCity).then(showNewWeather);
}

let cityInput = document.querySelector("#city-search-bar");
cityInput.addEventListener("submit", citySearch);

//Feature 3
function changeMetric() {
  let temperatureText = document.querySelector("#mainTemp-number");
  temperatureText.innerHTML = "18";
}

function changeImperial() {
  let temperatureText = document.querySelector("#mainTemp-number");
  temperatureText.innerHTML = "64";
}

let celcius = document.querySelector("#mainTemp-Celcius");
let farenheit = document.querySelector("#mainTemp-Farenheit");
celcius.addEventListener("click", changeMetric);
farenheit.addEventListener("click", changeImperial);

//Search engine task
let apiKey = "069d0b3024a243d003c1b6e46fbeed8c";

function showWeather(weather) {
  console.log(weather.data);
  let temp = Math.round(weather.data.main.temp);
  let weatherDisplay = document.querySelector("#mainTemp-number");
  weatherDisplay.innerHTML = `${temp}`;
  let newLocation = weather.data.name;
  console.log(newLocation);
  let displayLocation = document.querySelector("#city-location");
  displayLocation.innerHTML = `${newLocation}`;
}

function showCoordinate(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiURL).then(showWeather);
}

function toggleGPS() {
  navigator.geolocation.getCurrentPosition(showCoordinate);
}
//let buttonGPS = document.querySelectorAll("#buttonGPS");
buttonGPS.addEventListener("click", toggleGPS);
//Feature 1
function showTime(time) {
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let currentTime = document.querySelector("#current-time");
  if (minutes < 10) {
    minutes = "0" + minutes;
  } else {
  }
  currentTime.innerHTML = `${hours}:${minutes}`;
}

function showDay(day) {
  let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let currentDay = days[currentDate.getDay()];
  let currentDayText = `${currentDay}`;
  let dayText = document.querySelector("#current-day");
  dayText.innerHTML = currentDayText;
}

// let currentDate = new Date();
showTime();
showDay();

//search engine task cont.
function showNewWeather(weatherInfo) {
  let newWeatherInfo = Math.round(weatherInfo.data.main.temp);
  let newWeatherText = document.querySelector("#mainTemp-number");
  newWeatherText.innerHTML = `${newWeatherInfo}`;
}

//Feature 2
function citySearch() {
  event.preventDefault();
  let locationInput = document.querySelector("#city-search");
  let currentCity = locationInput.value;
  let newCity = document.querySelector("#city-location");
  newCity.innerHTML = `${locationInput.value}`;
  //Search Engine Task
  let apiCity = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${apiKey}&units=metric`;
  axios.get(apiCity).then(showNewWeather);
}

let cityInput2 = document.querySelector("#city-search-bar");
cityInput2.addEventListener("submit", citySearch);

//Feature 3
function changeMetric() {
  let temperatureText = document.querySelector("#mainTemp-number");
  temperatureText.innerHTML = "18";
}

function changeImperial() {
  let temperatureText = document.querySelector("#mainTemp-number");
  temperatureText.innerHTML = "64";
}

let celcius2 = document.querySelector("#mainTemp-Celcius");
let farenheit = document.querySelector("#mainTemp-Farenheit");
celcius2.addEventListener("click", changeMetric);
farenheit.addEventListener("click", changeImperial);

//Search engine task
let apiKey = "069d0b3024a243d003c1b6e46fbeed8c";

function showWeather(weather) {
  console.log(weather.data);
  let temp = Math.round(weather.data.main.temp);
  let weatherDisplay = document.querySelector("#mainTemp-number");
  weatherDisplay.innerHTML = `${temp}`;
  let newLocation = weather.data.name;
  console.log(newLocation);
  let displayLocation = document.querySelector("#city-location");
  displayLocation.innerHTML = `${newLocation}`;
}

function showCoordinate(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiURL).then(showWeather);
}

function toggleGPS() {
  navigator.geolocation.getCurrentPosition(showCoordinate);
}
//let buttonGPS = document.querySelectorAll("#buttonGPS");
buttonGPS.addEventListener("click", toggleGPS);
