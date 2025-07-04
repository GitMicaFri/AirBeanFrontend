import "./about.css";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import ownerImg from "../../assets/ownerImg.jpg";

function About() {
  return (
    <>
      <Header />
      <div className="about">
        <h1>Vårt kaffe</h1>

        <p><strong>
          Pumpkin spice mug, barista cup, sit macchiato, kopi-Luwak, doppio, grounds dripper, crema, strong whipped, variety extra iced id lungo half and half mazagran. Pumpkin spice.
        </strong></p>

        <p>
          Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich aftertaste, con panna milk black, arabica white rich beans single shot extra affogato. So affogato macchiato sit extraction instant grinder seasonal organic, turkish single shot, single origin, and robusta strong to go so dripper. Viennese froth, grounds caramelization skinny aromatic cup kopi-Luwak, fair trade flavour, frappuccino medium, café au lait flavour cultivar ut bar instant kopi-Luwak.
        </p>

        <p>
          Roast id macchiato, single shot siphon mazagran milk fair trade est aroma a half and half and, so, galão iced to go, whipped as cream cup pumpkin spice iced. At extra, rich grinder, brewed to go, steamed half and half at, that, percolator macchiato trifecta and body as arabica dripper. In galão black java milk sit trifecta, robusta, acerbic café au lait instant shop latte. Seasonal bar shop filter aroma id, crema, affogato viennese cultivar aftertaste, seasonal, percolator crema black, galão flavour, milk aromatic turkish skinny crema.
        </p>

        <div className="ownerSection">
          <img src={ownerImg} alt="Eva Cortado" className="ownerImg" />
          <p className="ownerName">Eva Cortado</p>
          <p className="ownerTitle">VD & Grundare</p>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default About;
