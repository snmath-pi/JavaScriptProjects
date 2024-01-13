console.log('afds');
const apiKey = '&appid=8d7cd1ee95cc50d0dfcd1d4a4e3d2deb';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?unit=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
async function checkWeather(city) {
    let str = apiUrl + city + apiKey;
    const response = await fetch(str);
    let data = await response.json();
    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').inn
    erHTML = Math.round(data.main.temp / 10) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%"
    document.querySelector('.wind').innerHTML = data.wind.speed + " Km/h";


}

searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
})