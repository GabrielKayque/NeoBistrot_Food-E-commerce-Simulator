import { useEffect, useState } from "react";
import ConfirmOrder from "../../../components/confirmorder/ConfirmOrder";
import currencyFormat from "../../../services/currencyFormat";
import { useCart } from "../../../services/hooks/useCart";
import { TableContainer, TableMobile } from "./Tablestyle";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";

function Table() {
  const { cart, decrementSnack, incrementSnack, deleteSnack } = useCart();

  const [windowWidth, setWindowWidth] = useState(
    document.documentElement.clientWidth
  );

  useEffect(() => {
    function changeTableComponent() {
      setWindowWidth(document.documentElement.clientWidth);
      console.log("resize");
    }
    window.addEventListener("resize", changeTableComponent);
    return () => {
      window.removeEventListener("resize", changeTableComponent);
      console.log("unmount");
    };
  }, []);

  // Render Table Desktop
  if (windowWidth > 768) {
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
  // Render Table Mobile
  return (
    <TableMobile>
      {cart.map((item, id) => (
        <div key={id} className="table-mobile">
          <div>
            <img src={item.image} alt={item.name} />
          </div>
          <div>
            <h4>{item.name}</h4>
            <span>{currencyFormat(item.price)}</span>
            <div>
              <div>
                <button onClick={() => decrementSnack(item)}>
                  <AiOutlineMinusCircle alt={item.name} />
                </button>
                <span>{`${item.quantity}`.padStart(2, "0")}</span>
                <button onClick={() => incrementSnack(item)}>
                  <AiOutlinePlusCircle />
                </button>
              </div>
              <button onClick={() => deleteSnack(item)}>
                <BsTrash />
              </button>
            </div>
            <h5>
              <span>Subtotal:</span>
              {currencyFormat(item.subtotal)}
            </h5>
          </div>
        </div>
      ))}
      <ConfirmOrder />
    </TableMobile>
  );
}

export default Table;
