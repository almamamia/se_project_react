import "./ItemModal.css";
import closeButtonAlpha from "../../images/modal_close_button_alpha.svg";

const ItemModal = ({ selectedCard, onClose, handleDeleteBtn }) => {
  return (
    <div className={`modal`}>
      <div className="modal__preview-content">
        <button className="modal__close-button" type="button" onClick={onClose}>
          <img src={closeButtonAlpha} alt="modal_close_button" />
        </button>
        <img
          className="modal__item-img"
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
        />
        <div className="modal__item-info">
          <div className="modal__item">
            <h3 className="modal__item modal__item-name">
              {selectedCard.name}
            </h3>
            <div className="modal__item modal__item-weather-type">
              Weather type: {selectedCard.weather}
            </div>
          </div>
          <div>
            <button
              className="modal__item-Delete"
              type="button"
              onClick={handleDeleteBtn}
            >
              Delete Item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
