import Pagelayout from "../../Components/PageLayout/PageLayout"
import "./LandingPage.css" 
import Vector from '../../assets/LogoMain.svg'



function LandingPage() {
// Elementen Innanför Pagelayout kommer att bli props.children i komponenten.
    return (
        <Pagelayout parentClass="landingPageContainer" showNavIcon={false}>  
                <div className="landingPageHeader pageContent">
                  <img src={Vector} alt="" className="airbeanIcon"/>
                    <h1 className="landingPageTitle">AIR BEAN</h1> 
                    <p className="landingPageSubtitle">DRONEDELIVERED COFFEE</p>
            </div>
        </Pagelayout>
    )
}

export default LandingPage