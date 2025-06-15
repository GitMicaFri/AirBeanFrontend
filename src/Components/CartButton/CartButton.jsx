
import cartIcon from "../../assets/cart.svg";
import "./cartButton.css"; 
import useStore from "../../store/store"



const CartButton = (props) => {
  const cart = useStore((state) => state.cart);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <button className="cartButton" onClick={props.toggleCart}>
      <img src={cartIcon} alt="Cart Icon" className="cartIcon" />
      {itemCount > 0 && <span className="cartCount">{itemCount}</span>}
    </button>
  )
};

export default CartButton;
