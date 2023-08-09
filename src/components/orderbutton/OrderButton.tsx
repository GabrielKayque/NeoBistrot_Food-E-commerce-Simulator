import { OrderButtonContainer } from "./OrderButtonstyle";
import { useCart } from "../../services/hooks/useCart";
import { ReactComponent as CartIcon } from "../../assets/shopping-cart.svg";

function OrderButton() {
  const { cart } = useCart();
  return (
    <OrderButtonContainer to={"cart"}>
      <span>Meu Pedido</span>
      <CartIcon />
      {cart.length !== 0 && <span>{`${cart.length}`.padStart(2, "0")}</span>}
    </OrderButtonContainer>
  );
}

export default OrderButton;
