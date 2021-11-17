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



function fetchWeatherByCity(city) {
    return fetch(`./weather/places/${city}`)
        .then(response => response.json());
}

function getWeather(city) {
    fetchWeatherByCity(city).then(response => {
        // for (let i = 0; i < response.forecastTimestamps.length; i++) {
        //     console.log(response.forecastTimestamps[i].forecastTimeUtc);
        // }
        // console.log(response.forecastTimestamps);

        console.log(response);
        // console.log(`${response.forecastTimestamps[1].airTemperature} | ${response.forecastTimestamps[1].forecastTimeUtc}`);

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


















    
    