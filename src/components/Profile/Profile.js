import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

const Profile = ({ onClick, clothingItems, onSelectCard }) => {
  console.log(onClick);
  return (
    <main className="profile">
      <SideBar className="sideBar" />
      <ClothesSection
        onClick={onClick}
        clothingItems={clothingItems}
        onSelectCard={onSelectCard}
      ></ClothesSection>
    </main>
  );
};

export default Profile;
