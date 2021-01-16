import './reset.css';
import './style.css';
import './imgs/main_background.jpg';
import config from '../../config';
import Weather from './weather';
import tools from './tools';

let url;
const searchInput = document.querySelector('.search-input');
const defaultURL = tools.getSearchURL('Buga', config);
const defaultResponse = tools.tryRequest(defaultURL);
const currentWeather = Weather(defaultResponse);

currentWeather.retrieveInfo();


searchInput.addEventListener('keypress', (e) => {
  if (e.keyCode === tools.enterKeyCode()) {
    const search = searchInput.value;

    if (search !== '') {
      url = tools.getSearchURL(search, config);


      const requestResponse = tools.tryRequest(url);


      const currentWeather = Weather(requestResponse);

      currentWeather.retrieveInfo();
    }
  }
});
