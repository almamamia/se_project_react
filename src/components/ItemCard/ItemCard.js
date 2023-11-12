import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div>
      <div className="item__card">
        <img
          src={item.link}
          className="card_img"
          onClick={() => onSelectCard(item)}
        />
        <div className="card_name">{item.name}</div>
      </div>
    </div>
  );
};

export default ItemCard;
