import { CartDropdownContainer, EmptyMessage, CartItems} from "./cart-dropdown.styles";
import { useNavigate } from "react-router-dom";
import Button from "../button/button";
import CartItem from "../cart-item/cart-item";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }

  return (
    <CartDropdownContainer>
      <CartItems>
      {
        cartItems.length ? (cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))) : (
        <EmptyMessage>Cart Empty</EmptyMessage>
      )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
