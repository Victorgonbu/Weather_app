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
    
    const countryName = (data) => {
        return data.sys.country;
    };
    
    const temperature = (data) => {
        return `<span>${Math.trunc(data.main.temp)}</span>`;
    };

    const weatherDescription = (data) => {
        return data.weather[0].description;
    };

    const feelsLike = (data) => {
        return Math.trunc(data.main.feels_like);
    };

    const windForce = (data) => {
        return data.wind.speed + ' Km/h';
    };

    const humidity = (data) => {
        return data.main.humidity + '%';
    };

    const getIconURL = (data) => {
        let icon = data.weather[0].icon;
        return `http://openweathermap.org/img/wn/${icon}@2x.png`;
    };


    const retrieveInfo = () => {
        request.then(data => {
            removeErrorMessage()
            cityTag.textContent = cityName(data);
            countryTag.textContent = countryName(data);
            temperatureTag.innerHTML = temperature(data);
            weatherDescription.textContent = weatherDescription(data);
            feelsLikeTag.textContent = feelsLike(data);
            windTag.textContent = windForce(data);
            humidity.textContent = humidity(data);
            
            iconContainer.src = getIconURL(data);
        }).catch(error => {
            searchError.classList.add('search-error-error');
        }); 
    };


    return {
        retrieveInfo,

    };
}

export default weather;