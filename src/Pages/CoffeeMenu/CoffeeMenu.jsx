

import { useEffect, useState } from "react";
import useStore from "../../store/store";
import addIcon from "../../assets/add-icon.png";
import headerImage from "../../assets/header.svg"; 
import "./coffeeMenu.css";
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import CartButton from "../../Components/CartButton/CartButton"
import Cart from "../../Components/Cart/Cart"

const CoffeeMenuPage = () => {
  const { addToCart } = useStore();
  const [coffee, setCoffee] = useState([]);
  const [cartIsOpen, setCartIsOpen] = useState(false)

  const toggleCart = () => setCartIsOpen(!cartIsOpen)
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://airbean-9pcyw.ondigitalocean.app/api/beans/"
        );
        const data = await response.json();
        //uppdaterar coffee med ny data
        console.log(data); // Logga för att se vad vi får från API:et
        setCoffee(data);
      } catch (error) {
        console.error("Oops!", error);
      }
    };
    fetchData();
    // dependency array finns här så att useEffect körs en gång
  }, []);

  return (
    <>
    <Header />

    <CartButton toggleCart={toggleCart} />

    { cartIsOpen && <Cart />}
  
    <div className="menu"> 
      <h2 className="menuHeader">Din Mamma</h2>
      <ul>
        {coffee.menu
          ? coffee.menu.map((coffeeItem, index) => (
              <li key={index}>
                <div className="itemContainer">
                  <img
                    className="addIcon"
                    src={addIcon}
                    alt="add icon"
                    onClick={() => addToCart(coffeeItem)}
                    style={{ cursor: "pointer" }}
                  />

                  <h3 className="title">{coffeeItem.title}</h3>
                  <h3 className="price">{coffeeItem.price} kr</h3>
                  <p className="desc">{coffeeItem.desc}</p>
                </div>
              </li>
            ))
          : //visas medan api hämtas
            "Loading..."}
      </ul>
       <Footer />
    </div>
    </>
  );
};


export default CoffeeMenuPage;