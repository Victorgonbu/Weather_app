const tools = (() => {
  const enterKeyCode = () => 13;

  const getSearchURL = (search, API_KEY) => {
    const searchValues = search.split(' ').join(',');

    return `https://api.openweathermap.org/data/2.5/weather?q=${searchValues}&appid=${API_KEY}&units=metric`;
  };

  async function tryRequest(url) {
    let request;
    let jsonRequest;

      request = await fetch(url);
      if (request.ok === false) {
        throw Error('not found');
      }
      jsonRequest = await request.json();
    
    return jsonRequest;
  }

  return {
    enterKeyCode,
    getSearchURL,
    tryRequest,
  };
})();

export default tools;