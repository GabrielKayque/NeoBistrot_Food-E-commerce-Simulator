import { CartContainer } from "./cartstyle";
import Head from "../../components/headtitle/HeadTitle";
import OrderHeader from "../../components/orderheader/OrderHeader";
import { useCart } from "../../services/hooks/useCart";
import Table from "./table/Table";

export default function Cart() {
  const { cart } = useCart();

  return (
    <CartContainer>
      <Head title="Carrinho" />
      <OrderHeader />
      {cart.length === 0 ? (
        <h1>Ops! Você ainda não adicionou nenhum item aos pedidos</h1>
      ) : (
        <Table />
      )}
    </CartContainer>
  );
}
