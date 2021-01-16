import './reset.css';
import './style.css';
import config from '../../config';
import Weather from './weather';

let url;
const cityTag = document.querySelector('.city');
const countryTag = document.querySelector('.country');
const temperatureTag = document.querySelector('.temperature');

const searchInput = document.querySelector('.search-input');
console.log(searchInput);


function capitalize(string) {
    string = string.split('');
    string[0].toUpperCase();
    string = string.join('');
    return string
}

searchInput.addEventListener('keypress', (e) => {
    if(e.keyCode === 13){
        const search = searchInput.value;
        if (search != '') {
            capitalize(search);
            let searchValues = search.split(' ');
            searchValues = searchValues.join(',');
            url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValues}&appid=${config.API_KEY}&units=metric`;
            
            let request =  fetch(url);


            request.then((response) => {
                return response.json();
            }).catch(error => {
                error
            }).then(data => {
                console.log(data);

                cityTag.textContent = data.name + ', ';
                countryTag.textContent = data.sys.country; 
                temperatureTag.innerHTML = `<span> ${data.main.temp} </span> <i class='fas fa-dot-circle'> </i>`;
            });

        }
    }
});

