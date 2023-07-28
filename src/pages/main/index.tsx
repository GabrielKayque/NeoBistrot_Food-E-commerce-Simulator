import Sidebar from "../../components/sidebar/Sidebar";
import { Container } from "./styles";
import { Outlet } from "react-router-dom";

export default function Index() {
  return (
    <Container>
      <Sidebar />
      <section>
        <Outlet />
      </section>
    </Container>
  );
}
