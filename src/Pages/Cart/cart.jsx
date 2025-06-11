import React from "react";
import "./cart.css";
import { useNavigate } from "react-router-dom";
import useStore from "../../store/store";
console.log("Cart import av store:", useStore);

const Cart = () => {
  console.log("Store ref i Cart:", useStore);

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
    <div className="cartContainer">
      <h2>Din beställning</h2>
      {cart.length === 0 ? (
        <p>Din varukorg är tom.</p>
      ) : (
        <>
          <ul>
            {cart.map((cartItem, index) => (
              <li key={index}>
                {cartItem.title} - {cartItem.quantity} st ({cartItem.price} kr/st)
                <button onClick={() => decreaseQuantity(cartItem.title)}>-</button>
                <button onClick={() => increaseQuantity(cartItem.title)}>+</button>
              </li>
            ))}
          </ul>
          <p>Total: {total} kr</p>
          <button onClick={handleOrder}>Take my money!</button>
        </>
      )}
    </div>
  );
};

export default Cart;
