import { useState } from 'react'

import reactangle from "../../assets/menu_icon.svg";

import "./header.css";
import useStore from "../../store/store";
import CartButton from "../CartButton/CartButton"
import NavMenu from "../NavMenu/NavMenu"
import Cart from "../Cart/Cart"

const Header = () => {
  const [navIsOpen, setNavIsOpen] = useState(false)

  const { cart } = useStore();
  //för att räkna antal produkter som finns i cart
  const totalQuantity = cart.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0
  );


  const toggleNavigation = () => {
    if (navIsOpen) {
      setNavIsOpen(false)
    } else {
      setNavIsOpen(true)
    }
  }

  if (navIsOpen) {
    return (
      <NavMenu onClose={toggleNavigation} />
    )
  }

  return (
    <>
      <header className="headerContainer">
        <button className="navButton" onClick={toggleNavigation} >
          <img src={reactangle} className="navIcon" alt="Navigation Icon" />
        </button>

      </header>
    </>
  );
};

export default Header;
