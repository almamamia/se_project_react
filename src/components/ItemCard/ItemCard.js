import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div className="item__card">
      <img
        src={item.imageUrl}
        className="card_img"
        onClick={() => onSelectCard(item)}
        alt={item.name}
      />
      <h3 className="card_name">{item.name}</h3>
    </div>
  );
};

export default ItemCard;
