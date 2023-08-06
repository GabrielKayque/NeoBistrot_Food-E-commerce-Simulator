import GlobalStyle from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { SnackProvider } from "./services/context";

function App() {
  return (
    <>
      <BrowserRouter>
        <SnackProvider>
          <GlobalStyle />
          <AppRoutes />
        </SnackProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
