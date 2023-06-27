import React from "react";

const WeatherCard = ({ weatherData }) => {
  const time = new Date(weatherData.dt * 1000).toLocaleString();
  const weatherIcon = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;

  return (
    <div className="p-5 bg-blue-200 rounded shadow-lg">
      <h2 className="text-xl font-bold mb-2">Weather in {weatherData.name}</h2>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-3xl font-semibold mb-2">
            {Math.round(weatherData.main.temp)}°C
          </h3>
          <p className="text-lg text-gray-700">
            {weatherData.weather[0].description}
          </p>
          <p className="text-md text-gray-600">Time: {time}</p>
        </div>
        <img
          src={weatherIcon}
          alt="weather status icon"
          className="w-32 h-32"
        />
      </div>
      <hr className="my-4" />
      <div className="grid grid-cols-2 gap-4 text-md">
        <div>
          <p>
            <strong>Humidity:</strong> {weatherData.main.humidity}%
          </p>
          <p>
            <strong>Pressure:</strong> {weatherData.main.pressure} hPa
          </p>
        </div>
        <div>
          <p>
            <strong>Wind Speed:</strong> {weatherData.wind.speed} m/s
          </p>
          <p>
            <strong>Wind Direction:</strong> {weatherData.wind.deg}°
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
