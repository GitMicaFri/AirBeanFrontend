import "./about.css";
import aboutImage from"../../assets/about.png"
import MenuButton from "../../Components/MenuButton/menuButton"

function About() {
  const style = {
    backgroundImage: `url(${aboutImage})`,
    backgroundSize: "cover",
    height: "100vh",
  };

  return (
    <div className="about" style={style}>
<MenuButton />
    </div>
  )
}

export default About;
