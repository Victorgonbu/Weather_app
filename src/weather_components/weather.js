const weather = (request) => {
  const weatherInfoContainer = document.querySelector('.info-container');
  const cityTag = document.querySelector('.city');
  const countryTag = document.querySelector('.country');
  const temperatureTag = document.querySelector('.temperature');
  const weatherDescription = document.querySelector('.weather-description');
  const feelsLikeTag = document.querySelector('.feel-like');
  const windTag = document.querySelector('.wind');
  const humidity = document.querySelector('.humidity');
  const iconContainer = document.querySelector('.icon-container');
  const searchError = document.querySelector('.search-error');

  const removeErrorMessage = (searchError) => {
    if (searchError.classList.contains('search-error-error')) {
      searchError.classList.remove('search-error-error');
    }
  };

  const cityName = (data) => `${data.name}, `;

  const countryName = (data) => data.sys.country;

  const temperature = (data) => `<span>${Math.trunc(data.main.temp)}</span>`;

  const weatherDesc = (data) => data.weather[0].description;

  const feelsLike = (data) => Math.trunc(data.main.feels_like);

  const windForce = (data) => `${data.wind.speed} Km/h`;

  const getHumidity = (data) => `${data.main.humidity}%`;

  const getIconURL = (data) => {
    const { icon } = data.weather[0];
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
  };

  const popUpAnimation = (weatherInfoContainer) => {
    weatherInfoContainer.classList.toggle('info-active');
    setTimeout(() => {
      weatherInfoContainer.classList.toggle('info-active')
    }, 0);
  };


  const retrieveInfo = () => {
    request.then(data => {
      removeErrorMessage(searchError);
      popUpAnimation(weatherInfoContainer);
      cityTag.textContent = cityName(data);
      countryTag.textContent = countryName(data);
      temperatureTag.innerHTML = temperature(data);
      weatherDescription.textContent = weatherDesc(data);
      feelsLikeTag.textContent = feelsLike(data);
      windTag.textContent = windForce(data);
      humidity.textContent = getHumidity(data);
      iconContainer.src = getIconURL(data);
    }).catch((error) => {
      searchError.classList.add('search-error-error');
      return error;
    });
  };


  return {
    retrieveInfo,
  };
};

export default weather;