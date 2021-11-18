// window.axios = require('axios');
// window.bootstrap = require('bootstrap');
const search = document.querySelector('.button-search');
const menu = document.querySelector('.button-menu');
const input = document.querySelector('.input');
const form = document.querySelector('.form-form');
const close = document.querySelector('.close-img');


menu.addEventListener('click', () => form.style.display = 'inline');
close.addEventListener('click', () => form.style.display = 'none');

let bodyClick = true;
window.addEventListener('click', function () {
    bodyClick = !bodyClick;
    if (!bodyClick) {
        form.style.display = 'none';
    }
});

let temp = true;
search.addEventListener('click', function () {
    temp = !temp;
    if (!temp) {
        input.style.display = "inline"
    } else {
        input.style.display = "none"
    }
});

//---------------Promises

function fetchWeatherByCity(city) {
    return fetch(`./weather/places/${city}`)
        .then(response => response.json());
}
//-------------------------------


function setParametersOnPage(city, airTemperature, totalPrecipitation, windSpeed, windGust) {
    let cityPlace = document.querySelector('#city1');
    let degrees = document.querySelector('.degrees');
    let windNumber = document.querySelector('.wind_number');
    let milimetersNumbers = document.querySelector('.milimeters_numbers');
    let smallPerHour = document.querySelector('.smallPerHour');
    cityPlace.textContent = city;
    degrees.textContent = airTemperature;
    windNumber.textContent = windSpeed;
    milimetersNumbers.textContent = totalPrecipitation;
    smallPerHour.textContent = windGust;
}


function getWeather(city) {
    fetchWeatherByCity(city).then(response => {

        setParametersOnPage(response.place.name, response.forecastTimestamps[1].airTemperature, response.forecastTimestamps[1].totalPrecipitation, response.forecastTimestamps[1].windGust, response.forecastTimestamps[1].windSpeed);

    })
};

input.addEventListener('keyup', logKey);

function logKey(e) {
    const value = input.value;
    if (e.key === 'Enter' || e.keyCode === 13) {
        getWeather(value);
    }
};

//-----------------------------------------------------



















