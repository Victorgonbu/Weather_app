import './reset.css';
import './style.css';
import config from '../../config';
import Weather from './weather';
import tools from './tools';

let url;

const cityTag = document.querySelector('.city');
const countryTag = document.querySelector('.country');
const temperatureTag = document.querySelector('.temperature');

const searchInput = document.querySelector('.search-input');

searchInput.addEventListener('keypress', (e) => {
    
    if(e.keyCode === tools.enterKeyCode()){

        const search = searchInput.value;

        if (search != '') {
            
            url = tools.getSearchURL(search, config);
            
            
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

