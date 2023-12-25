import "./ModalWithForm.css";
import closeButton from "../../images/modal_close_button.svg";

const ModalWithForm = ({
  children,
  title,
  onClose,
  name,
  isOpen,
  onSubmit,
  buttonText,
}) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <h3 className="modal__title">{title}</h3>
        <button className="modal__close-button" type="button" onClick={onClose}>
          <img src={closeButton} alt="modal_close_button" />
        </button>

        <form className="modal__form" onSubmit={onSubmit}>
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
