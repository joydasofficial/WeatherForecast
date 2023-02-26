import React from "react";
import styles from "./style.module.scss";

const CurrentWeather = ({ currentWeather }) => {
  return (
    <>
      <h2>{currentWeather.data.name}</h2>
      <div style={{ display: "flex" }}>
        <img
          src={`http://openweathermap.org/img/w/${currentWeather.data.weather[0].icon}.png`}
        />
        <h3>{currentWeather.data.main.temp}&#8451;</h3>
      </div>
      <p>
        Feels like {currentWeather.data.main.feels_like}&#8451;.{" "}
        {currentWeather.data.weather[0].description}.{" "}
        {currentWeather.data.weather[0].main}
      </p>
      <p>
        Wind Speed : {currentWeather.data.wind.speed}m/s, Pressure :{" "}
        {currentWeather.data.main.pressure}hPa
      </p>
      <p>
        Humidity : {currentWeather.data.main.humidity}% , Visibility :{" "}
        {currentWeather.data.visibility / 1000}km
      </p>{" "}
    </>
  );
};

export default CurrentWeather;
