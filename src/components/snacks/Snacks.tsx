import currencyFormat from "../../services/currencyFormat";
import LoadingSnack from "../loading/LoadingSnack";
import { SnacksContainer } from "./Snacksstyle";
import { SnacksProps } from "../../services/interfaces";
import { useCart } from "../../services/hooks/useCart";

interface SnacksPropsList {
  snacks: SnacksProps[];
}

export default function Snacks({ snacks }: SnacksPropsList) {
  const { cart, addSnack } = useCart();

  return (
    <SnacksContainer>
      {!snacks.length
        ? [1, 2, 3, 4].map((n) => <LoadingSnack key={n} />)
        : snacks.map((snack) => {
            return (
              <li key={snack.id} className="snack">
                {cart.map(
                  (item) =>
                    item.name === snack.name && (
                      <span key={item.id}> {item.quantity} </span>
                    )
                )}
                <h2>{snack.name}</h2>
                <img src={snack.image} alt={snack.name} />
                <p>{snack.description}</p>
                <div>
                  <strong>{currencyFormat(snack.price)}</strong>
                  <button type="button" onClick={() => addSnack(snack)}>
                    +
                  </button>
                </div>
              </li>
            );
          })}
    </SnacksContainer>
  );
}
