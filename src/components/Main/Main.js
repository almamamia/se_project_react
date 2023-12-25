import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useMemo, useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function Main({ weatherTemp, onSelectCard, clothingItems }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const currentTemp = weatherTemp?.temperature?.[currentTemperatureUnit] || 999;

  const weatherTypeF = useMemo(() => {
    const tempF = weatherTemp?.temperature?.F;
    if (tempF >= 86) {
      return "hot";
    } else if (tempF >= 66 && tempF <= 85) {
      return "warm";
    } else if (tempF <= 65) {
      return "cold";
    }
  }, [weatherTemp]);

  const weatherTypeC = useMemo(() => {
    const tempC = weatherTemp?.temperature?.C;
    if (tempC >= 25) {
      return "hot";
    } else if (tempC >= 9 && tempC <= 24) {
      return "warm";
    } else if (tempC <= 8) {
      return "cold";
    }
  }, [weatherTemp]);

  const filteredCardsF = clothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherTypeF;
  });

  const filteredCardsC = clothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherTypeC;
  });

  return (
    <main className="main">
      <WeatherCard day={true} type="cloudy" weatherTemp={currentTemp} />

      <section className="main__cards" id="main__cards">
        <div className="main__text">
          Today is {currentTemp}°{currentTemperatureUnit}. You may want to wear:
        </div>
        <div className="card_section">
          {currentTemperatureUnit === "F"
            ? filteredCardsF.map((item) => {
                return (
                  <ItemCard
                    item={item}
                    onSelectCard={onSelectCard}
                    key={item._id}
                  />
                );
              })
            : currentTemperatureUnit === "C" &&
              filteredCardsC.map((item) => {
                return (
                  <ItemCard
                    item={item}
                    onSelectCard={onSelectCard}
                    key={item._id}
                  />
                );
              })}
        </div>
      </section>
    </main>
  );
}

export default Main;
