import { createContext, useState } from "react";
import { SnacksProps } from "./interfaces";
import useSnacks from "./hooks/useSnacks";

// ========== Context Snacks ==========
interface SnackContextProps {
  burguers: SnacksProps[];
  pizzas: SnacksProps[];
  sodas: SnacksProps[];
  icecreams: SnacksProps[];
}

export const SnackContext = createContext({} as SnackContextProps);

export const SnackProvider = ({ children }: { children: React.ReactNode }) => {
  const burguers = useSnacks("burguers");
  const pizzas = useSnacks("pizzas");
  const sodas = useSnacks("sodas");
  const icecreams = useSnacks("icecreams");

  return (
    <SnackContext.Provider value={{ burguers, pizzas, sodas, icecreams }}>
      {children}
    </SnackContext.Provider>
  );
};

// ======== Context Cart ========
interface SnackCart extends SnacksProps {
  quantity: number;
  subtotal: number;
}

interface CartContextProps {
  cart: SnackCart[];
  addSnack: (snack: SnacksProps) => void;
  // TODO: Impementar corretamente as funçoes!
  //removeSnack: ({ id, snack }: { id: number; snack: string }) => void;
  // updateSnack: ({
  //   id,
  //   snack,
  //   newQuantity,
  // }: {
  //   id: number;
  //   snack: string;
  //   newQuantity: number;
  // }) => void;
  // clearCart: () => void;
}

export const CartContext = createContext({} as CartContextProps);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<SnackCart[]>([]);

  function addSnack(snack: SnacksProps): void {
    const snackAlreadyExist = cart.find((item) => item.name === snack.name);

    if (snackAlreadyExist) {
      const newCart = cart.map((item) => {
        if (item.name === snack.name) {
          const quantity = item.quantity + 1;
          const subtotal = quantity * snack.price;

          return { ...item, quantity, subtotal };
        }
        return item;
      });
      setCart(newCart);
      console.log(newCart);
      return;
    }

    const newSnack = { ...snack, quantity: 1, subtotal: snack.price };
    const newCart = [...cart, newSnack];
    setCart(newCart);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addSnack,
        // removeSnack: () => {},
        // updateSnack: () => {},
        // clearCart: () => {},
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
