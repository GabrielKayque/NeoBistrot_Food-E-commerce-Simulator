import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.svg";
import { ReactComponent as CartIcon } from "../../assets/shopping-cart.svg";
import { OrderHeaderContainer } from "./OrderHeaderstyle";
import { useCart } from "../../services/hooks/useCart";

function OrderHeader() {
  const { cart } = useCart();
  const totalLanches = cart.reduce((acc, item) => (acc += item.quantity), 0);

  return (
    <OrderHeaderContainer>
      <Link to="/">
        <img src={logoImg} alt="logo" />
      </Link>
      <div>
        <div>
          <h3>Meus Pedidos</h3>
          <span>
            <strong>{totalLanches}</strong> lanche(s)
          </span>
        </div>
        <CartIcon />
      </div>
    </OrderHeaderContainer>
  );
}

export default OrderHeader;
