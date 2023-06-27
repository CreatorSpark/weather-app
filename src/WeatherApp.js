import React, { useState } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const fetchData = () => {
    if (city.trim() === "") {
      setError("Please enter a city name");
      return;
    }

    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      )
      .then((res) => setWeatherData(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="p-5 bg-white rounded shadow-xl w-100">
        <h2 className="text-2xl mb-4 text-center">Weather App</h2>
        <div className="mb-5">
          <input
            className="p-2 w-full border rounded"
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            className="p-2 mt-3 w-full bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            onClick={fetchData}
          >
            Fetch Weather
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
        {weatherData && <WeatherCard weatherData={weatherData} />}
      </div>
    </div>
  );
};

export default WeatherApp;
