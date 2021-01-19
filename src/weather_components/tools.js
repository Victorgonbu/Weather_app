const Tools = (() => {
  const enterKeyCode = () => 13;

  const getSearchURL = (search, API_KEY) => {
    const searchValues = search.split(' ').join(',');

    return `https://api.openweathermap.org/data/2.5/weather?q=${searchValues}&appid=${API_KEY}&units=metric`;
  };

  async function tryRequest(url) {
    const mainRequest = await fetch(url);
    if (mainRequest.ok === false) {
      throw Error('not found');
    }
    const jsonRequest = await mainRequest.json();

    return jsonRequest;
  }

  return {
    enterKeyCode,
    getSearchURL,
    tryRequest,
  };
})();

export default Tools;