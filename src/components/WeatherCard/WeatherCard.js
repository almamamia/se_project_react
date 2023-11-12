import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });

  const imageSrcUrl = imageSrc[0].url || "";
  return (
    <section className="weather" id="weatherCard">
      <div className="weather_info">{weatherTemp}°F</div>
      <img src={imageSrcUrl} className="weather_img" />
    </section>
  );
};

export default WeatherCard;
