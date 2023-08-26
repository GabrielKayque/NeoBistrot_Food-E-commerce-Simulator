import { Theme } from "./styles/Theme";
import GlobalStyle from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { CartProvider, SnackProvider } from "./services/context";

function App() {
  return (
    <>
      <BrowserRouter>
        <Theme>
          <SnackProvider>
            <CartProvider>
              <GlobalStyle />
              <AppRoutes />
            </CartProvider>
          </SnackProvider>
        </Theme>
      </BrowserRouter>
    </>
  );
}

export default App;
