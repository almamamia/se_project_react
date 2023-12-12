import "./Header.css";
import WTWRlogo from "../../images/Logo.svg";
import avatar from "../../images/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

const Header = ({ onClick, currentLocation }) => {
  const currentDate = new Date().toLocaleDateString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div>
        <div>
          <Link to="/">
            <img src={WTWRlogo} alt="logo" className="header__logo" />
          </Link>
        </div>
        <div className="header__date">
          {currentDate}, {currentLocation}
        </div>
      </div>

      <div className="header__avatar-logo">
        <ToggleSwitch />
        <button type="text" className="header__add-button" onClick={onClick}>
          + Add clothes
        </button>
        <Link to="/profile" className="nav__link">
          Terrence Tegegne
        </Link>
        <div>
          <img src={avatar} alt="Avatar logo" className="header__avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
