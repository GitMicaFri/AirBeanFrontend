//landing page
import { Link } from 'react-router-dom'
import "./landing.css" 
import landingImage from '../../assets/landing.png'


function LandingPage() {
  console.log("Rendering LandingPage component");  // Debug-logg
    return (
       //  showNavIcon={false}>  
                <div className="landingPageContainer">
                  <img src={landingImage} alt="Landing Page" className="landingImage"/>
                  <Link to="/about" className="landingLink"> 
                  <span className="hoverText">Klicka här för att läsa mer</span>
            </Link>
            </div> 
    )
}

export default LandingPage