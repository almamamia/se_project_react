import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useForm from "../../hooks/useForm";
import { useEffect, useState } from "react";

const AddItemModal = ({ handleCloseModal, onAddItem, isOpen, buttonText }) => {
  const { values, handleChange: handleInputChange } = useForm({
    name: "",
    imageUrl: "",
    weather: "",
  });

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

  const radioOptions = ["Hot", "Warm", "Cold"];

  const [isFormFilled, setIsFormFilled] = useState(false);
  useEffect(() => {
    const filled =
      values.name.trim() !== "" &&
      values.imageUrl.trim() !== "" &&
      values.weather.trim() !== "";

    setIsFormFilled(filled);
  }, [values]);

  const buttonColor = isFormFilled ? "filled-button" : "empty-button";

  return (
    <ModalWithForm
      title="New garment"
      isOpen={isOpen}
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
      buttonText={buttonText}
      buttonColor={buttonColor}
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
          {radioOptions.map((option) => (
            <div key={option} className="modal__form-option">
              <label className="modal__input_form_value">
                <input
                  type="radio"
                  name="weather"
                  id={option.toLowerCase()}
                  value={option}
                  className="modal__input_form_radio"
                  onChange={handleInputChange}
                  checked={values.weather === option}
                />
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
