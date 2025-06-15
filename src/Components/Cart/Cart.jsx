
import "./cart.css";
import { useNavigate } from "react-router-dom";
import useStore from "../../store/store";
import arrowUp from "../../assets/arrowUp.svg";
import arrowDown from "../../assets/arrowDown.svg";

const Cart = () => {
  const cart = useStore((state) => state.cart);
  const increaseQuantity = useStore((state) => state.increaseQuantity);
  const decreaseQuantity = useStore((state) => state.decreaseQuantity);
  const sendOrder = useStore((state) => state.sendOrder);
  const clearCart = useStore((state) => state.clearCart);
  const orderNr = useStore((state) => state.orderNr);
  const eta = useStore((state) => state.eta);

  const navigate = useNavigate();

  const handleOrder = async () => {
    await sendOrder(cart);
    navigate("/status");
  };

  const total = cart.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <>
      <div className="cartContainer">
        <h2>Din beställning</h2>
        {cart.length === 0 ? (
          <p>Din varukorg är tom.</p>
        ) : (
          <>
          <div className="cartListWrapper">
            <ul className="cartList">
              {cart.map((cartItem, index) => (
                <li key={index} className="cartItem">
                  <div className="itemNameArea">
                    <span className="itemTitle">{cartItem.title}</span>
                    <span className="dots"></span>
                  </div>

                  <div className="quantityControls">
                    <button onClick={() => increaseQuantity(cartItem.title)}>
                      <img src={arrowUp} alt="Increase" className="arrowIcon" />
                    </button>
                    <span className="quantity">{cartItem.quantity}</span>
                    <button onClick={() => decreaseQuantity(cartItem.title)}>
                      <img src={arrowDown} alt="Decrease" className="arrowIcon" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

            <p className="totalPrice">Total: {total} kr</p>

            <button className="orderButton" onClick={handleOrder}>
              Take my money!
            </button>
          </>
        )}
      </div>
      <div className="overlay" >
      </div>
    </>
  );
};

export default Cart;
