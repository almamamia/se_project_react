import "./Header.css";
import WTWRlogo from "../../images/Logo.svg";
import avatar from "../../images/avatar.svg";

const Header = ({ onClick, currentLocation }) => {
  const currentDate = new Date().toLocaleDateString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div>
        <div>
          <img src={WTWRlogo} alt="logo" className="header__logo" />
        </div>
        <div className="header__date">
          {currentDate}, {currentLocation}
        </div>
      </div>

      <div className="header__avatar-logo">
        <button type="text" className="header__add-button" onClick={onClick}>
          + Add clothes
        </button>
        <div>Terrence Tegegne</div>
        <div>
          <img src={avatar} alt="Avatar logo" className="header__avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
