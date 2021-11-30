function displayTemperature(response) {
  console.log(response.data);
  console.log(response.data.main.humidity);
  console.log(response.data.wind.speed);
  let cityElement = document.querySelector("#city");
  let temperatureElement = document.querySelector("#temperature");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  cityElement.innerHTML = response.data.name;
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = response.data.wind.speed;
}
let apikey = "8bfbf28022488dee7340fe98270ce789";
apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=${apikey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
