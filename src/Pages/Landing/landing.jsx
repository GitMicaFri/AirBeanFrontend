//landing page

import "./landing.css" 
import landingImage from '../../assets/landing.png'
import React from 'react'
import { Link } from 'react-router-dom'



function LandingPage() {

    return (
       //  showNavIcon={false}>  
                <div className="landingPageContainer">
                  <img src={landingImage} alt="Landing Page" className="landingImage"/>
                  <Link to="/coffee-menu"> 
                <button>Gå till Kaffemenyn</button>
            </Link>
            </div> 
    )
}

export default LandingPage