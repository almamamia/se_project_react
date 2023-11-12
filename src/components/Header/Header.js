import "./Header.css";

const Header = ({ onClick, currentLocation }) => {
  const currentDate = new Date().toLocaleDateString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={require("../../images/Logo.svg").default} alt="logo" />
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
          <img
            src={require("../../images/avatar.svg").default}
            alt="Avatar logo"
            className="header__avatar"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
