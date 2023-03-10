const weatherApiKey = '984e1e19c59ee606846d705f30faa608';

const rapiAPIKey = '2f52bd8ed8mshe107b810383d3e8p1cb7d1jsnd6f64cfc15d0';

const options = {
    method: 'GET',
    url: 'https://imdb-charts.p.rapidapi.com/charts',
    params: {id: 'boxoffice'},
    headers: {
      'X-RapidAPI-Key': '2f52bd8ed8mshe107b810383d3e8p1cb7d1jsnd6f64cfc15d0',
      'X-RapidAPI-Host': 'imdb-charts.p.rapidapi.com'
    }
  };

export {weatherApiKey, rapiAPIKey};