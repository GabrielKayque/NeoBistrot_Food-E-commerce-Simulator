import { DefaultTheme, ThemeProvider } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    primary: "#1a1e22",
    red: "#E03131",
    darkRed: "#7a1212",
    yellow: "#FCC419",
    white: "#FFFFFF",
    black: "#0C0D0F",
  },
};

export function Theme({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
