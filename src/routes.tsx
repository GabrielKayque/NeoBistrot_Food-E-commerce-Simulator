import { Routes, Route } from "react-router-dom";
import Index from "./pages/main";
import BurguersPage from "./pages/main/burguers/burguers";
import PizzasPage from "./pages/main/pizzas/pizzas";
import Sodas from "./pages/main/sodas/sodas";
import IceCreams from "./pages/main/icecreams/icecreams";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Index />}>
        <Route path="/" element={<BurguersPage />} />
        <Route path="pizzas" element={<PizzasPage />} />
        <Route path="icecreams" element={<IceCreams />} />
        <Route path="sodas" element={<Sodas />} />
      </Route>
    </Routes>
  );
}
