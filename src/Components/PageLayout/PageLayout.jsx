
import PropTypes from 'prop-types'
import './PageLayout.css'
import YourOrder from '../YourOrder/YourOrder'
import { useState } from 'react'
import './Nav.css'
import CartIcon from '../../assets/cart-1.png'
import NavIcon from '../../assets/navicon.png'
import CloseIcon from '../../assets/close.png'
import { Link } from "react-router-dom"

const PageLayout = ({
    children, // Desctructuring the "props" object
    parentClass,
    showNavIcon = true,
    showCartIcon = false
}) => {
    const [
        navIsOpen, // state-värdet.
        setNavIsOpen // Funktionen som används för att uppdatera state-värdet (setNavIsOpen(true/false))
    ] = useState(false) // Skapa ett state
    const [cartIsOpen, setCartIsOpen] = useState(false)

    const toggleNav = () => {
        if(navIsOpen) {
            setNavIsOpen(false)
        } else {
            setCartIsOpen(false)
            setNavIsOpen(true)
        }
    }

    const toggleCart = () => {
        if (cartIsOpen) {
            setCartIsOpen(false)
        } else {
            setNavIsOpen(false)
            setCartIsOpen(true)
        }
    }

    return (
        <div className={
             `${parentClass} pageStyle`
        }>
            <header className='headerContainer'>
                {showNavIcon && <button
                    className='navIcon'
                    onClick={toggleNav}>
                        <img src={navIsOpen ? CloseIcon : NavIcon} alt="icon" />
                </button>}

                {showCartIcon && <button
                    className='cartIconBtn'
                    onClick={toggleCart}>
                    <img className="cartIconImg"src={CartIcon} alt="icon" />
                </button>}
            </header>
            {children}
            {navIsOpen && <NavigationArea />}
            {cartIsOpen && <YourOrder />}
        </div>
    )
}

function NavigationArea() {
    return (
        <div className='navPopup'> 
            <Link to="/menu">Meny</Link>
            <p className='line'>____</p>
            <br />
            <Link to="/ourcoffee">Vårt Kaffe</Link>
            <p className='line'>____</p>
            <br />
            <Link to="/welcome">Min Profil</Link>
            <p className='line'>____</p>
            <br />
            <Link to="/orderhistory">Orderstatus</Link>
        </div>
    )
}

PageLayout.propTypes = {
    children: PropTypes.element,  // vi talar om för den att den kommer att få ta emot proptypes som är element i form av children. 
    parentClass: PropTypes.string,
    showNavIcon: PropTypes.bool, // Prop för att kontrollera om nav ikonen syns på sidan
    showCartIcon: PropTypes.bool,
}
export default PageLayout