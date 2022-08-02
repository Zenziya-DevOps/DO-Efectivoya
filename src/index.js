import React from "react";
import ReactDom from "react-dom";
import { Vw_OnBoarding } from "./layout/Onbording";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import "@fontsource/poppins";
import UxUIProvider from "./context/UxUIProvider";
import DataProvider from "./context/DataProvider";

const theme = createTheme({
  typography: {
    body1: {
      fontFamily: "poppins",
      color: "#455A64",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "poppins",
        },
      },
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <UxUIProvider>
        <DataProvider>
          <CssBaseline />
          <Vw_OnBoarding />
        </DataProvider>
      </UxUIProvider>
    </ThemeProvider>
  );
};

ReactDom.render(<App />, document.getElementById("z"));
