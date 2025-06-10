import { Link } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
import "./navMenu.css"
import closeIcon from "../../assets/close.svg"
// Här ska det finnas en stäng-knapp: close.svg
// En lista med länkar till andra sidor Meny, Vårt kaffe, Min profil, Orderstatus

function NavMenu() {
  console.log("Rendering NavMenu");  // Debug log
  return (
    <div className="navMenuContainer">

<Link to="/" className="closeButton">
        <img src={closeIcon} alt="Close menu" className="closeIcon" />
      </Link>

      <ul className="navMenuList">
        <li><Link to="/coffee-menu">Meny</Link></li>
        <li><Link to="/about">Vårt kaffe</Link></li>
        <li><Link to="/profile">Min profil</Link></li>
        <li><Link to="/order-history">Orderstatus</Link></li>
      </ul>
    </div>
  );
};

export default NavMenu;