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

const searchInput = document.querySelector('.search-input');

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
                temperatureTag.innerHTML = `<span>${data.main.temp}</span> <i class='fas fa-dot-circle'></i>`;
                weatherDescription.textContent = data.weather[0].description;
            });
        }
    }
});

