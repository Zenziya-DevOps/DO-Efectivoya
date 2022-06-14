import React from "react"
import ReactDom from "react-dom"
import { Vw_OnBoarding } from "./layout/Onbording"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles.css"
import "@fontsource/poppins"

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
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Vw_OnBoarding />
    </ThemeProvider>
  )
}

ReactDom.render(<App />, document.getElementById("z"))
