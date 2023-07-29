import Sidebar from "../../components/sidebar/Sidebar";
import { Container } from "./styles";
import { Outlet } from "react-router-dom";

import logoIcon from "../../assets/logo.svg";

export default function Index() {
  return (
    <Container>
      <Sidebar />
      <section>
        <img src={logoIcon} alt="logo" />
        <Outlet />
      </section>
    </Container>
  );
}
