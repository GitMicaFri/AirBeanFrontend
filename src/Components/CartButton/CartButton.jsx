
import { Link } from "react-router-dom";
import cartIcon from "../../assets/cart.svg";
import "./cartButton.css"; 
import useStore from "../../store/store"

const CartButton = () => {
  const cart = useStore((state) => state.cart);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  return (
    <Link to="/cart" className="cartButton">
      <img src={cartIcon} alt="Cart Icon" className="cartIcon" />
      {itemCount > 0 && <span className="cartCount">{itemCount}</span>}
    </Link>
  );
};

export default CartButton;
