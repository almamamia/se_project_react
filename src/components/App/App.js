import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { useEffect, useState } from "react";
import {
  getForecastWeather,
  parseWeatherData,
  parseLocationData,
} from "../../utils/weatherAPI";

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

  const [temp, setTemp] = useState(0);
  const [loc, setLocation] = useState(0);
  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        const location = parseLocationData(data);
        setTemp(temperature);
        setLocation(location);
      })
      .catch(console.errer);
  }, []);

  return (
    <div>
      <Header onClick={createActiveModal} currentLocation={loc} />
      <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
      <Footer />

      {activeModal === "create" && (
        <ModalWithForm title="New garment" onClose={handleCloseModal}>
          <div className="modal__input">
            <label className="modal__label">
              Name
              <input
                type="text"
                name="name"
                placeholder="Name"
                minLength={1}
                maxLength={30}
                className="modal__input-text modal__input_card-name"
              />
            </label>

            <label className="modal__label">
              Image
              <input
                type="url"
                name="link"
                placeholder="Image URL"
                required
                minLength={1}
                maxLength={30}
                className="modal__input-text modal__input_card-url"
              />
            </label>

            <label className="modal__label modal__label-radio">
              Select the weather type:
            </label>
            <div className="modal__form-children">
              <div className="modal__form-option">
                <input
                  type="radio"
                  name="radAnswer"
                  id="hot"
                  value="hot"
                  className="modal__input_form_radio"
                />
                <label className="modal__input_form_value">Hot</label>
              </div>
              <div className="modal__form-option">
                <input
                  type="radio"
                  name="radAnswer"
                  id="Warm"
                  value="Warm"
                  className="modal__input_form_radio"
                />
                <label className="modal__input_form_value">Warm</label>
              </div>
              <div className="modal__form-option">
                <input
                  type="radio"
                  name="radAnswer"
                  id="Cold"
                  value="Cold"
                  className="modal__input_form_radio"
                />
                <label className="modal__input_form_value">Cold</label>
              </div>
            </div>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal onClose={handleCloseModal} selectedCard={selectedCard} />
      )}
    </div>
  );
}

export default App;
