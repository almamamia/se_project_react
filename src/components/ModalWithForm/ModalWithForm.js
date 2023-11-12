import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  buttonText = "Add garment",
  title,
  onClose,
  name,
}) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <h3 className="modal__title">{title}</h3>
        <button className="modal__close-button" type="button" onClick={onClose}>
          <img
            src={require("../../images/modal_close_button.svg").default}
            alt="modal_close_button"
          />
        </button>

        <form
          className="modal__form"
          onSubmit={(evt) => {
            evt.preventDefault();
          }}
        >
          {children}
          <button type="submit" className="modal__submit-btn">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
