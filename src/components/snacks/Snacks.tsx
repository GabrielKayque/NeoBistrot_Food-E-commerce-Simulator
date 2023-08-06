import currencyFormat from "../../services/currencyFormat";
import LoadingSnack from "../loading/LoadingSnack";
import { SnacksContainer } from "./Snacksstyle";
import { SnacksProps } from "../../services/interfaces";

interface SnacksPropsList {
  snacks: SnacksProps[];
}

export default function Snacks({ snacks }: SnacksPropsList) {
  return (
    <SnacksContainer>
      {!snacks.length
        ? [1, 2, 3, 4].map((n) => <LoadingSnack key={n} />)
        : snacks.map((snack) => (
            <li key={snack.id} className="snack">
              <h2>{snack.name}</h2>
              <img src={snack.image} alt={snack.name} />
              <p>{snack.description}</p>
              <div>
                <strong>{currencyFormat(snack.price)}</strong>
                <button type="button">+</button>
              </div>
            </li>
          ))}
    </SnacksContainer>
  );
}
