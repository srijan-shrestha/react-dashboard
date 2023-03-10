import axios from "axios";
import { useState, useEffect } from "react";
import { rapiAPIKey } from "../../../config";

const Weather = () => {
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    // function to call on page load
    getWeather();
  }, []);

  // configuration for weather API call
  const weatherOptions = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/current.json",
    params: { q: "toronto" },
    headers: {
      "X-RapidAPI-Key": rapiAPIKey,
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

    // function to call Weather API
    const getWeather =() => {
      axios.request(weatherOptions).then(function (response) {
        console.log(response.data);
        setWeather(response.data);
      }).catch(function (error) {
        console.error(error);
      });
    }
  return    <div
  className="shadow-md border-green cursor-pointer hover:bg-blue-50 flex flex-col justify-center items-center p-4 m-3"
>
  <h2>Weather</h2>
  <p className="my-1">Temperature: {weather?.current?.temp_c} °C / {weather?.current?.temp_f} °F</p>
  <p className="my-1">Location: {weather?.location.name}</p>
  <p className="my-1">Humidity: {weather?.condition?.humidity}</p>
  <p className="my-1">Feels Like: {weather?.condition?.feelslike_c} °C / {weather?.current?.feelslike_f} °F</p>

</div>;
};

export default Weather;
