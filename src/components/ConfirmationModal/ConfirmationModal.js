import "./ConfirmationModal.css";
import closeButton from "../../images/modal_close_button.svg";

const ConfirmationModal = ({
  selectedCard,
  onClose,
  onDeleteItem,
  buttonText,
}) => {
  const handleDeleteItem = () => {
    console.log(selectedCard._id);
    onDeleteItem(selectedCard);
  };
  return (
    <div className={`modal`}>
      <div className="modal__confirm-container">
        <button className="modal__close-button" type="button" onClick={onClose}>
          <img src={closeButton} alt="modal_close_button" />
        </button>
        <div className="modal__confirm-text-wrapper">
          <p className="modal__confirm-text">
            Are you sure you want to delete this item? This action is
            irreversable.
          </p>
        </div>
        <button
          className="modal__confirm-delete-button"
          type="button"
          onClick={handleDeleteItem}
        >
          {buttonText}
        </button>
        <button
          className="modal__confirm-cancel-button"
          type="button"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
