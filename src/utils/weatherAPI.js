import "./api.js";
import { checkServerResponse } from "./api.js";

const latitude = "40.68";
const longitude = "-73.95";
const APIkey = "2ce56d7e66826f23073822f39fbb3a00";

export const getForecastWeather = () => {
  const weatherApi =
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}
`).then(checkServerResponse);

  return weatherApi;
};

export const parseWeatherData = (data) => {
  const weather = {
    temperature: {
      F: Math.round(data.main.temp),
      C: Math.round(((data.main.temp - 32) * 5) / 9),
    },
  };
  return weather;
};

export const parseLocationData = (data) => {
  const currentLocation = data.name;
  return currentLocation;
};
