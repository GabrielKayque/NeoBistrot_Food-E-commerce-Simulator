import { useState } from "react";

import { SidebarContainer } from "./Sidebarstyle";

import { ReactComponent as BurguerIcon } from "../../assets/burger.svg";
import { ReactComponent as PizzaIcon } from "../../assets/pizza.svg";
import { ReactComponent as IceCreamIcon } from "../../assets/ice-cream.svg";
import { ReactComponent as SodaIcon } from "../../assets/soda.svg";

import menuImg from "../../assets/menu.svg";

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };
  return (
    <>
      <SidebarContainer isMenuOpen={menuOpen}>
        <button onClick={toggleMenu}>
          <img src={menuImg} alt="Abrir e fechar o menu" />
        </button>
        <nav>
          <ul>
            <li>
              <a href="#">
                <BurguerIcon />
                <span>Hambúrgueres</span>
              </a>
            </li>
            <li>
              <a href="#">
                <PizzaIcon />
                <span>Pizzas</span>
              </a>
            </li>
            <li>
              <a href="#" className="active">
                <IceCreamIcon />
                <span>Sobremesas</span>
              </a>
            </li>
            <li>
              <a href="#">
                <SodaIcon />
                <span>Bebidas</span>
              </a>
            </li>
          </ul>
        </nav>
      </SidebarContainer>
    </>
  );
}
