import { useState } from "react";
import { NavLink } from "react-router-dom";

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
              <NavLink to="/">
                <BurguerIcon />
                <span>Hambúrgueres</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/pizzas">
                <PizzaIcon />
                <span>Pizzas</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/icecreams">
                <IceCreamIcon />
                <span>Sobremesas</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/sodas">
                <SodaIcon />
                <span>Bebidas</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </SidebarContainer>
    </>
  );
}
