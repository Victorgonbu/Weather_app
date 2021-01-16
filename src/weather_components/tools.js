const tools = (() => {
 
const enterKeyCode = () => {
    return 13;
};

const getSearchURL = (search, config) => {
       
        let searchValues = search.split(' ').join(',');

        return `https://api.openweathermap.org/data/2.5/weather?q=${searchValues}&appid=${config.API_KEY}&units=metric`;
};

async function  tryRequest (url) {

    let request;
    let jsonRequest;

    try {
        request = await fetch(url);
        if (request.status == '404'){
            throw Error
        };
        jsonRequest = await request.json();

        return jsonRequest;
        

    } catch (error) {
        console.log('error name');
    }
    

};

return {
    enterKeyCode,
    getSearchURL,
    tryRequest
}

})();

export default tools;