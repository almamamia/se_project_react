import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

const Profile = ({ onClick, clothingItems, onSelectCard }) => {
  return (
    <main className="profile">
      <SideBar className="sideBar" />
      <ClothesSection
        onClick={onClick}
        clothingItems={clothingItems}
        onSelectCard={onSelectCard}
      />
    </main>
  );
};

export default Profile;
