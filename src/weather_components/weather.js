const weather = (request) => {
    const cityTag = document.querySelector('.city');
    const countryTag = document.querySelector('.country');
    const temperatureTag = document.querySelector('.temperature');
    const weatherDescription = document.querySelector('.weather-description');
    const feelsLikeTag = document.querySelector('.feel-like');
    const windTag = document.querySelector('.wind');
    const humidity = document.querySelector('.humidity');
    const iconContainer = document.querySelector('.icon-container');
    const searchError = document.querySelector('.search-error');

    const removeErrorMessage = () => {
        if(searchError.classList.contains('search-error-error')) {
            searchError.classList.remove('search-error-error');
        }
    };

    const cityName = (data) => {
        return data.name + ',';
    };

    const retrieveInfo = () => {
        request.then(data => {
            removeErrorMessage()
            cityTag.textContent = cityName(data);
            countryTag.textContent = data.sys.country;
            temperatureTag.innerHTML = `<span>${Math.trunc(data.main.temp)}</span>`;
            weatherDescription.textContent = data.weather[0].description;
            feelsLikeTag.textContent = Math.trunc(data.main.feels_like);
            windTag.textContent = data.wind.speed + ' Km/h';
            humidity.textContent = data.main.humidity + '%';
            let icon = data.weather[0].icon;
            iconContainer.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        }).catch(error => {
            searchError.classList.add('search-error-error');
        });
    };


    return {
        retrieveInfo,

    };
}

export default weather;