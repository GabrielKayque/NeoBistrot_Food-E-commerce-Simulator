import currencyFormat from "../../services/currencyFormat";
import { SnacksContainer } from "./Snacksstyle";

interface SnacksProps {
  snacks: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
  }[];
}

export default function Snacks({ snacks }: SnacksProps) {
  return (
    <SnacksContainer>
      {snacks.map((snack) => (
        <li key={snack.id}>
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
