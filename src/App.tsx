import GlobalStyle from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { CartProvider, SnackProvider } from "./services/context";

function App() {
  return (
    <>
      <BrowserRouter>
        <SnackProvider>
          <CartProvider>
            <GlobalStyle />
            <AppRoutes />
          </CartProvider>
        </SnackProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
