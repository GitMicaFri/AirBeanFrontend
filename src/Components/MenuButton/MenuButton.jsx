// import React from "react"; behövs inte
import { Link } from "react-router-dom";
import navIcon from "../../assets/navicon.png";
import "./menuButton.css"; 

const MenuButton = () => {
  return (
    <Link to="/coffee-menu" className="menuButton">
      <img src={navIcon} alt="Menu Icon" className="menuIcon" />
    </Link>
  );
};

export default MenuButton;
