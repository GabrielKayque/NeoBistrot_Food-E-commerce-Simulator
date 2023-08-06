import { createContext } from "react";
import { SnacksProps } from "./interfaces";
import useSnacks from "./useSnacks";

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
