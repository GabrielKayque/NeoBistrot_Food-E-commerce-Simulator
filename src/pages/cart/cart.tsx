import { CartContainer } from "./cartstyle";
import Head from "../../components/headtitle/HeadTitle";
import OrderHeader from "../../components/orderheader/OrderHeader";

export default function cart() {
  return (
    <CartContainer>
      <Head title="Carrinho" />
      <OrderHeader />
    </CartContainer>
  );
}
