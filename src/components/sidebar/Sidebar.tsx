import { SidebarContainer } from "./Sidebarstyle";

import { ReactComponent as BurguerIcon } from "../../assets/burger.svg";
import menuImg from "../../assets/menu.svg";

export default function Sidebar() {
  return (
    <>
      <SidebarContainer>
        <button>
          <img src={menuImg} alt="Abrir e fechar o menu" />
        </button>
        <nav>
          <ul>
            <li>
              <a href="" />
              <BurguerIcon />
              <span>Hambúrgueres</span>
            </li>
          </ul>
        </nav>
      </SidebarContainer>
    </>
  );
}
