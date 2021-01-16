import './reset.css';
import './style.css';
import config from '../../config';
import Weather from './weather';
import tools from './tools';
import weather from './weather';

let url;

const cityTag = document.querySelector('.city');
const countryTag = document.querySelector('.country');
const temperatureTag = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const feelsLikeTag = document.querySelector('.feel-like');
const windTag = document.querySelector('.wind');
const searchInput = document.querySelector('.search-input');
const humidity = document.querySelector('.humidity');
const iconContainer = document.querySelector('.icon-container');

searchInput.addEventListener('keypress', (e) => {
    
    if(e.keyCode === tools.enterKeyCode()){

        const search = searchInput.value;

        if (search != '') {
            
            url = tools.getSearchURL(search, config);
            
            
            let requestResponse = tools.tryRequest(url);

            requestResponse.then(data => {
                console.log(data);
                cityTag.textContent = data.name + ', ';
                countryTag.textContent = data.sys.country;
                temperatureTag.innerHTML = `<span>${Math.trunc(data.main.temp)}</span>`;
                weatherDescription.textContent = data.weather[0].description;
                feelsLikeTag.textContent = Math.trunc(data.main.feels_like);
                windTag.textContent = data.wind.speed + ' Km/h';
                humidity.textContent = data.main.humidity + '%';
                let icon = data.weather[0].icon;
                iconContainer.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
            });
        }
    }
});

