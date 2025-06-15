import { Link } from "react-router-dom";
import "./navMenu.css"
import closeIcon from "../../assets/close.svg"

function NavMenu(props) {
  console.log("Rendering NavMenu");  // Debug log
  return (
    <div className="navMenuContainer">

      <button className="closeButton" onClick={props.onClose}>
        <img src={closeIcon} alt="Close menu" className="closeIcon" />
      </button>

      <ul className="navMenuList">
        <li><Link to="/coffee-menu">Meny</Link></li>
        <li><Link to="/about">Vårt kaffe</Link></li>
        <li><Link to="/profile">Min profil</Link></li>
        <li><Link to="/status">Orderstatus</Link></li>
      </ul>
    </div>
  );
};

export default NavMenu;