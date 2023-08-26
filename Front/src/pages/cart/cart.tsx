import { CartContainer } from "./cartstyle";
import Head from "../../components/headtitle/HeadTitle";
import OrderHeader from "../../components/orderheader/OrderHeader";
import { useCart } from "../../services/hooks/useCart";
import Table from "./table/Table";
import EmptyCart from "../../components/emptycart/EmptyCart";

export default function Cart() {
  const { cart } = useCart();

  return (
    <CartContainer>
      <Head title="Carrinho" />
      <OrderHeader />
      {cart.length === 0 ? (
        <EmptyCart title="Seu carrinho está vazio" />
      ) : (
        <Table />
      )}
    </CartContainer>
  );
}
