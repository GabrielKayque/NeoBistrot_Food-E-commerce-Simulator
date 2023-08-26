import Sidebar from "../../components/sidebar/Sidebar";
import { Container } from "./styles";
import { Outlet } from "react-router-dom";

import logoIcon from "../../assets/logo.svg";
import OrderButton from "../../components/orderbutton/OrderButton";

export default function Index() {
  return (
    <Container>
      <Sidebar />
      <section>
        <img src={logoIcon} alt="logo" />
        <Outlet />
      </section>
      <OrderButton />
    </Container>
  );
}
