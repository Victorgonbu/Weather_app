const tools = (() => {
 
const capitalize = (string) => {
    string = string.split('');
    string[0].toUpperCase();
    string = string.join('');
    return string
};

const enterKeyCode = () => {
    return 13;
};

const getSearchURL = (search, config) => {
        capitalize(search);
        let searchValues = search.split(' ').join(',');

        return `https://api.openweathermap.org/data/2.5/weather?q=${searchValues}&appid=${config.API_KEY}&units=metric`;
}

return {
    capitalize,
    enterKeyCode,
    getSearchURL
}

})();

export default tools;