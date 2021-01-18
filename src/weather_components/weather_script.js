import './reset.css';
import './style.css';
import './imgs/main_background.jpg';
import Weather from './weather';
import Tools from './tools';

let url;
const searchInput = document.querySelector('.search-input');
const defaultURL = Tools.getSearchURL('Buga', process.env.API_KEY);
const defaultResponse = Tools.tryRequest(defaultURL);
const currentWeather = Weather(defaultResponse);


currentWeather.retrieveInfo();


searchInput.addEventListener('keypress', (e) => {
  if (e.keyCode === Tools.enterKeyCode()) {
    const search = searchInput.value;

    if (search !== '') {
      url = Tools.getSearchURL(search, process.env.API_KEY);


      const requestResponse = Tools.tryRequest(url);


      const currentWeather = Weather(requestResponse);

      currentWeather.retrieveInfo();
    }
  }
});
