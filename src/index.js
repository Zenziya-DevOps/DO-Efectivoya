import React from "react"
import ReactDom from "react-dom"
import { Vw_OnBoarding } from "./layout/Onbording"
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles.css"
import "@fontsource/poppins"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <Vw_OnBoarding />
    </BrowserRouter>
  )
}

ReactDom.render(<App />, document.getElementById("z"))
