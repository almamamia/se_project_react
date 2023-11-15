import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose }) => {
  return (
    <div className={`modal`}>
      <div className="modal__preview-content">
        <button className="modal__close-button" type="button" onClick={onClose}>
          <img
            src={require("../../images/modal_close_button_alpha.svg").default}
            alt="modal_close_button"
          />
        </button>
        <img
          className="modal__item-img"
          src={selectedCard.link}
          alt={selectedCard.name}
        />
        <h3 className="modal__item modal__item-name">{selectedCard.name}</h3>
        <div className="modal__item modal__item-weather-type">
          Wather type: {selectedCard.weather}
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
