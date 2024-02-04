const apiKey = "c8f7dc386474299653ab16ed10bed897";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherImg = document.querySelector(".weatherImg");

async function checkWether(city) {
  const res = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await res.json();

  console.log(data);

  document.querySelector(".temp").innerHTML = Math.round(data.main.temp);

  document.querySelector(".cityName").innerHTML = data.name;

  document.querySelector(".humidity").innerHTML = data.main.humidity;

  document.querySelector(".wind").innerHTML = data.wind.speed;

  if (data.weather[0].main == "Clouds") {
    weatherImg.src = "./assets/images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherImg.src = "./assets/images/clear.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherImg.src = ".assets/images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherImg.src = "./assets/images/mist.png";
  } else if (data.weather[0].main == "Rain") {
    weatherImg.src = "./assets/images/rain.png";
  } else if (data.weather[0].main == "Snow") {
    weatherImg.src = "./assets/images/snow.png";
  } else {
    weatherImg.src = "./assets/images/clouds.png";
  }
}

searchBtn.addEventListener("click", function () {
  checkWether(searchBox.value);
});
