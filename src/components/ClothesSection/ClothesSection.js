import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const ClothesSection = (clothingItems, onSelectCard) => {
  const userItems = clothingItems.filter((item) => {
    return item.owner === CurrentUserContext._id;
  });
  return (
    <section className="clothes__section">
      <div className="clothes__section-bar">
        <p className="clothes__section-text">Your items</p>
        <button className="clothes__section-btn" type="button" onClick>
          + Add New
        </button>
      </div>
      console.log(clothingItems);
      <div className="clothes__section-cards">
        {userItems.map((item) => {
          return (
            <ItemCard item={item} onSelectCard={onSelectCard} key={item._id} />
          );
        })}
      </div>
    </section>
  );
};

export default ClothesSection;
