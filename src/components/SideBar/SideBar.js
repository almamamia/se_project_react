import "./SideBar.css";
import avatar from "../../images/avatar.svg";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div>
        <img src={avatar} alt="Avatar logo" className="sidebar__avatar" />
      </div>

      <p className="sidebar_name">Terrence Tegegne</p>
    </div>
  );
};

export default SideBar;
