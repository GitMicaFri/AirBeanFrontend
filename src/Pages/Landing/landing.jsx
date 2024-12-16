//landing page

import "./landing.css" 
import landingImage from '../../assets/landing.png'



function LandingPage() {

    return (
       //  showNavIcon={false}>  
                <div className="landingPageContainer">
                  <img src={landingImage} alt="Landing Page" className="landingImage"/>
            </div> 
    )
}

export default LandingPage