import { Button, EmptyCartContainer } from "./EmptyCartstyle";
import manAndBurger from "../../assets/man-and-burger.svg";
function EmptyCart({ title }: { title: string }) {
  return (
    <EmptyCartContainer>
      <h2>{title}</h2>
      <Button to="/">Checar o cardápio</Button>
      <img src={manAndBurger} alt="Empty Cart" />
    </EmptyCartContainer>
  );
}

export default EmptyCart;
