import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import AddItemModal from "../AddItemModal/AddItemModal";
import ItemModal from "../ItemModal/ItemModal";
import Profile from "../Profile/Profile";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";

import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom";

import {
  getForecastWeather,
  parseWeatherData,
  parseLocationData,
} from "../../utils/weatherAPI";
import {
  getClothingItems,
  parseClothingItemData,
  addNewClothingItem,
  deleteClothingItem,
} from "../../utils/api";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const createActiveModal = () => {
    setActiveModal("create");
  };
  const handleCloseModal = () => {
    setActiveModal("");
  };

  const [selectedCard, setSelectedCard] = useState({});
  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const openConfirmationModal = () => {
    setActiveModal("confirm");
  };

  const [temp, setTemp] = useState(0);
  const [loc, setLocation] = useState(0);
  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        console.log(data);
        const temperature = parseWeatherData(data);
        const location = parseLocationData(data);
        setTemp(temperature);
        setLocation(location);
      })
      .catch(console.errer);
  }, []);

  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  const [clothingItems, setClothingItems] = useState("");

  const handleItemAddSubmit = (values) => {
    const item = {
      names: values.name,
      url: values.url,
      weather: values.weatherType,
    };
    setClothingItems([item, ...clothingItems]);
  };

  useEffect(() => {
    getClothingItems()
      .then((data) => {
        console.log(data);
        const items = parseClothingItemData(data);
        console.log(items);
        setClothingItems(items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [currentUser, setCurrentUser] = useState("");

  return (
    <div>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <CurrentUserContext.Provider value={currentUser}>
          <Header onClick={createActiveModal} currentLocation={loc} />
          <Switch>
            <Route exact path="/">
              <Main
                weatherTemp={temp}
                onSelectCard={handleSelectedCard}
                clothingItems={clothingItems}
              />
            </Route>
            <Route path="/profile">
              <Profile
                clothingItems={clothingItems}
                onSelectCard={handleSelectedCard}
              />
            </Route>
          </Switch>
          <Footer />

          {activeModal === "create" && (
            <AddItemModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "create"}
              onAddItem={handleItemAddSubmit}
            />
          )}
          {activeModal === "preview" && (
            <ItemModal
              onClose={handleCloseModal}
              selectedCard={selectedCard}
              handleDeleteBtn={openConfirmationModal}
            />
          )}
          {activeModal === "confirm" && (
            <ConfirmationModal
              onClose={handleCloseModal}
              selectedCard={selectedCard}
              buttonText={"Yes, delete item"}
              //onDeleteItem={handleDeleteSubmit}
            />
          )}
        </CurrentUserContext.Provider>
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
