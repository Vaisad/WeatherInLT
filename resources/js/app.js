// window.axios = require('axios');
// window.bootstrap = require('bootstrap');


const search = document.querySelector('.button-search');
const menu = document.querySelector('.button-menu');
const input = document.querySelector('.input');
const form = document.querySelector('.form-form');
const close = document.querySelector('.close-img');
const menuButton = document.querySelector('#menu');




menu.addEventListener('click', () => form.classList.toggle('d-none'));
close.addEventListener('click', () => form.classList.toggle('d-none'));
document.addEventListener('click', (e) => {
    if (!menuButton.contains(e.target)) {
        form.classList.add('d-none');
    };
});

search.addEventListener('click', function () {
    if (input.classList.contains('d-none')) {
        input.classList.toggle('d-none');
    } else {
        getWeather(input.value);
    }
});

//---------------Promises

function fetchWeatherByCity(city) {
    return fetch(`./weather/places/${city}`)
        .then(response => response.json());
}
//-------------------------------


function setParametersOnPage(city, airTemperature, totalPrecipitation, windSpeed,windDirection, relativeHumidity, conditionCode) {
    let cityPlace = document.querySelector('#city1');
    let degrees = document.querySelector('.degrees');
    let windNumber = document.querySelector('.wind_number');
    let milimetersNumbers = document.querySelector('.milimeters_numbers');
    let windDegrees = document.querySelector('.windDegrees');
    let humidity = document.querySelector('.humidity');
    let condition = document.querySelector('.condition');
    cityPlace.textContent = city;
    degrees.textContent = airTemperature;
    windNumber.textContent = windSpeed;
    milimetersNumbers.textContent = totalPrecipitation;
    windDegrees.textContent = windDirection;
    humidity.textContent = relativeHumidity;
    condition.textContent = conditionCode;
}


function getWeather(city) {
    fetchWeatherByCity(city).then(response => {
        let airCondition = airConditionTranslator[response.forecastTimestamps[1].conditionCode];
        setParametersOnPage(response.place.name, response.forecastTimestamps[1].airTemperature, response.forecastTimestamps[1].totalPrecipitation, response.forecastTimestamps[1].windSpeed, response.forecastTimestamps[1].windDirection, response.forecastTimestamps[1].relativeHumidity, airCondition);
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
const airConditionTranslator = {
    'clear' : 'Giedra',
    'isolated-clouds': 'Mažai debesuota',
    'scattered-clouds': 'Debesuota su pragiedruliais',
    'overcast': 'Debesuota',
    'light-rain': ' Nedidelis lietus',
    'moderate-rain': 'Lietus',
    'heavy-rain': 'Smarkus lietus',
    'sleet': 'Šlapdriba',
    'light-snow': 'Nedidelis sniegas',
    'moderate-snow': 'Sniegas',
    'heavy-snow': 'Smarkus sniegas',
    'fog': 'Rūkas',
    'na': 'Oro sąlygos nenustatytos'
};

















