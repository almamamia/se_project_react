import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useForm from "../../hooks/useForm";
import { useEffect, useState } from "react";

const AddItemModal = ({ handleCloseModal, onAddItem, isOpen, buttonText }) => {
  const { values, handleChange: handleInputChange, setValues } = useForm({});

  useEffect(() => {
    if (!isOpen) {
      setValues({});
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const capitalizeValues = {
      ...values,
      name: capitalizeFirstLetter(values.name),
    };
    handleCloseModal();
    onAddItem(capitalizeValues);
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <ModalWithForm
      title="New garment"
      isOpen={isOpen}
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
      buttonText={buttonText}
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
            value={values.name || ""}
            onChange={handleInputChange}
          />
        </label>

        <label className="modal__label">
          Image
          <input
            type="url"
            name="imageUrl"
            placeholder="Image URL"
            required
            minLength={1}
            maxLength={300}
            className="modal__input-text modal__input_card-url"
            value={values.imageUrl}
            onChange={handleInputChange}
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
                name="weather"
                id="hot"
                value="hot"
                className="modal__input_form_radio"
                onChange={handleInputChange}
              />
              Hot
            </label>
          </div>
          <div className="modal__form-option">
            <label className="modal__input_form_value">
              <input
                type="radio"
                name="weather"
                id="Warm"
                value="Warm"
                className="modal__input_form_radio"
                onChange={handleInputChange}
              />
              Warm
            </label>
          </div>
          <div className="modal__form-option">
            <label className="modal__input_form_value">
              <input
                type="radio"
                name="weather"
                id="Cold"
                value="Cold"
                className="modal__input_form_radio"
                onChange={handleInputChange}
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
