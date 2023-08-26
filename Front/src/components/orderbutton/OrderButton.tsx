import { OrderButtonContainer } from "./OrderButtonstyle";
import { useCart } from "../../services/hooks/useCart";
import { ReactComponent as CartIcon } from "../../assets/shopping-cart.svg";

function OrderButton() {
  const { cart } = useCart();
  const totalLanches = cart.reduce((acc, item) => (acc += item.quantity), 0);

  return (
    <OrderButtonContainer to={"cart"}>
      <span>Meu Pedido</span>
      <CartIcon />
      {cart.length !== 0 && <span>{`${totalLanches}`.padStart(2, "0")}</span>}
    </OrderButtonContainer>
  );
}

export default OrderButton;
