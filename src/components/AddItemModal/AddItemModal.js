import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect, useState } from "react";

const AddItemModal = ({ handleCloseModal, onAddItem, isOpen }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const [imageUrl, setUrl] = useState("");
  const handleUrlChange = (e) => {
    console.log(e.target.value);
    setUrl(e.target.value);
  };

  const [weather, setWeatherType] = useState("");
  const handleWeatherTypeChange = (e) => {
    setWeatherType(e.target.value);
  };

  useEffect(() => {
    if (!isOpen) {
      setName("");
      setUrl("");
      setWeatherType("");
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCloseModal();
    onAddItem({ name, imageUrl, weather });
  };

  return (
    <ModalWithForm
      title="New garment"
      isOpen={isOpen}
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
    >
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
            value={name}
            onChange={handleNameChange}
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
            maxLength={300}
            className="modal__input-text modal__input_card-url"
            value={imageUrl}
            onChange={handleUrlChange}
          />
        </label>

        <p className="modal__label modal__label-radio">
          Select the weather type:
        </p>
        <div className="modal__form-children">
          <div className="modal__form-option">
            <label className="modal__input_form_value">
              <input
                type="radio"
                name="radAnswer"
                id="hot"
                value="hot"
                className="modal__input_form_radio"
                onChange={handleWeatherTypeChange}
              />
              Hot
            </label>
          </div>
          <div className="modal__form-option">
            <label className="modal__input_form_value">
              <input
                type="radio"
                name="radAnswer"
                id="Warm"
                value="Warm"
                className="modal__input_form_radio"
                onChange={handleWeatherTypeChange}
              />
              Warm
            </label>
          </div>
          <div className="modal__form-option">
            <label className="modal__input_form_value">
              <input
                type="radio"
                name="radAnswer"
                id="Cold"
                value="Cold"
                className="modal__input_form_radio"
                onChange={handleWeatherTypeChange}
              />
              Cold
            </label>
          </div>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
