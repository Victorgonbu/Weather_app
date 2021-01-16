import './reset.css';
import './style.css';
import icon from './imgs/main_background.jpg'
import config from '../../config';
import Weather from './weather';
import tools from './tools';
import weather from './weather';

let url;
const searchInput = document.querySelector('.search-input');
let defaultURL = tools.getSearchURL('Buga', config);
let defaultResponse = tools.tryRequest(defaultURL);
let currentWeather = Weather(defaultResponse);

currentWeather.retrieveInfo();


searchInput.addEventListener('keypress', (e) => {
    
    if(e.keyCode === tools.enterKeyCode()){

        const search = searchInput.value;

        if (search != '') {
            
            url = tools.getSearchURL(search, config);
            
            
            let requestResponse = tools.tryRequest(url);


            let currentWeather = Weather(requestResponse);

            currentWeather.retrieveInfo();

            
        }
    }
});

