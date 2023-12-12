import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

const Profile = (clothingItems, onSelectCard) => {
  return (
    <main className="profile">
      <SideBar></SideBar>
      <ClothesSection
        clothingItems={clothingItems}
        onSelectCard={onSelectCard}
      ></ClothesSection>
    </main>
  );
};

export default Profile;
