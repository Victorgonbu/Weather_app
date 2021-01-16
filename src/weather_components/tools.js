const tools = (() => {
 
const enterKeyCode = () => {
    return 13;
};

const getSearchURL = (search, config) => {
       
        let searchValues = search.split(' ').join(',');

        return `https://api.openweathermap.org/data/2.5/weather?q=${searchValues}&appid=${config.API_KEY}&units=metric`;
};

const tryRequest = async (url) => {

    try {
        let request = await fetch(url);
        let jsonRequest = await request.json();
        return jsonRequest;

    } catch (error) {
        console.log('error! NOT FOUND');
    }
    

};

return {
    enterKeyCode,
    getSearchURL,
    tryRequest
}

})();

export default tools;