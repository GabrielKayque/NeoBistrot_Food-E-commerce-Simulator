import ConfirmOrder from "../../../components/confirmorder/ConfirmOrder";
import currencyFormat from "../../../services/currencyFormat";
import { useCart } from "../../../services/hooks/useCart";
import { TableContainer } from "./Tablestyle";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";

function Table() {
  const { cart, decrementSnack, incrementSnack, deleteSnack } = useCart();

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
                  <button onClick={() => decrementSnack(item)}>
                    <AiOutlineMinusCircle />
                  </button>
                  <span>{`${item.quantity}`.padStart(2, "0")}</span>
                  <button onClick={() => incrementSnack(item)}>
                    <AiOutlinePlusCircle />
                  </button>
                </div>
              </td>
              <td>
                <h5>{currencyFormat(item.subtotal)}</h5>
              </td>
              <td>
                <button onClick={() => deleteSnack(item)}>
                  <BsTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ConfirmOrder />
    </TableContainer>
  );
}

export default Table;
