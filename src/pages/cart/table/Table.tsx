import currencyFormat from "../../../services/currencyFormat";
import { useCart } from "../../../services/hooks/useCart";
import { TableContainer } from "./Tablestyle";
import plusImg from "../../../assets/plus.png";
import minusImg from "../../../assets/minus.png";

function Table() {
  const { cart } = useCart();

  return (
    <TableContainer>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Lanches</th>
            <th>Quantidade</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, id) => (
            <tr key={id}>
              <td>
                <img src={item.image} alt={item.name} />
              </td>
              <td>
                <h4>{item.name}</h4>
                <span>{currencyFormat(item.price)}</span>
              </td>
              <td>
                <div>
                  <button onClick={() => console.log("decrementou", item)}>
                    <img src={minusImg} alt="decrementar" />
                  </button>
                  <span>{`${item.quantity}`.padStart(2, "0")}</span>
                  <button onClick={() => console.log("incrementou", item)}>
                    <img src={plusImg} alt="incrementar" />
                  </button>
                </div>
              </td>
              <td>
                <h5>{currencyFormat(item.subtotal)}</h5>
              </td>
              <td>Deletar</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
}

export default Table;
