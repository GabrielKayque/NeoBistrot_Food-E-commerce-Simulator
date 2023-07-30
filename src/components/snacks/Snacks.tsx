/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { SnacksContainer } from "./Snacksstyle";

interface SnacksProps {
  snacks: any[];
}

export default function Snacks({ snacks }: SnacksProps) {
  return (
    <SnacksContainer>
      {snacks.map((snack) => (
        <div key={snack.id}>
          <h2>{snack.name}</h2>
          <img src={snack.image} alt={snack.name} />
          <p>{snack.description}</p>
          <div>
            <strong>{snack.price}</strong>
            <button type="button"></button>
          </div>
        </div>
      ))}
    </SnacksContainer>
  );
}
