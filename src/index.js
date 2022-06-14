import React from "react"
import ReactDom from "react-dom"
import { Vw_OnBoarding } from "./layout/Onbording"
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles.css"
import "@fontsource/poppins"
import { ThemeProvider, createTheme } from "@mui/material/styles"

const theme = createTheme({
  body1: {
    fontFamily: "Poppins",
    color: "#455a64",
  },
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Vw_OnBoarding />
    </ThemeProvider>
  )
}

ReactDom.render(<App />, document.getElementById("z"))
