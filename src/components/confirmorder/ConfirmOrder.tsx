import { useCart } from "../../services/hooks/useCart";
import { Container } from "./ConfirmOrderstyle";
import currencyFormat from "../../services/currencyFormat";
function ConfirmOrder() {
  const { cart } = useCart();
  const totalAmount = cart.reduce((acc, item) => (acc += item.subtotal), 0);

  return (
    <Container>
      <button>Finalizar Pedido</button>
      <span>
        Total <strong>{currencyFormat(totalAmount)}</strong>
      </span>
    </Container>
  );
}

export default ConfirmOrder;
