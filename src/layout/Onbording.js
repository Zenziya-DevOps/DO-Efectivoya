import React, { Component } from "react"
import { COMP_Header } from "../components/home/header/comp_header"
import { COMP_Pasos } from "../components/home/pasos/comp_pasos"
import { COMP_Requisitos } from "../components/home/requesitos/comp_requisitos"
import { COMP_Consultas } from "../components/home/consultas/comp_consultas"
import { COMP_historia } from "../components/home/historias/historias_comp"
import { COMP_Cuotas } from "../components/home/cuota/comp_cuota"
import { COMP_Footer } from "../components/home/footer/comp_footer"
import { COMPMobile } from "../components/movil/comp_mobil"
import { OtpValidacion } from "../components/movil/comp_mobil_validacion"
import { ProcesarSolicitud } from "./../components/ProcesarSolicitud"
import { IngresoCedula } from "../components/IngresoCedula"

import bk_1 from "../images/bk_1.svg"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { COMP_Header_real } from "../components/home/header/comp_header_real"
import { Aprobado } from "../components/Aprobado"
import { Desaprobado } from "../components/Desaprobado"

export class Vw_OnBoarding extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/contrato"
            component={() => {
              window.location.href = "https://sitio.efectivoya.do/contrato"
              return null
            }}
          />
          <Route
            path="/knoxguard"
            component={() => {
              window.location.href = "https://sitio.efectivoya.do/knoxguard"
              return null
            }}
          />

          <Route
            path="/pagosreferenciados"
            component={() => {
              window.location.href =
                "https://sitio.efectivoya.do/pagosreferenciados"
              return null
            }}
          />

          <Route path="/ingreso_cedula/:monto">
            <IngresoCedula />
          </Route>

          <Route path="/oferta_real/:cedula/:monto">
            <COMP_Header_real />
          </Route>

          <Route path="/validacion_otp">
            <COMPMobile />
          </Route>

          <Route path="/validacion_otp_resultado">
            <OtpValidacion />
          </Route>

          <Route path="/procesar_solicitud">
            <ProcesarSolicitud />
          </Route>

          <Route path="/solicitud/aprobado">
            <Aprobado />
          </Route>

          <Route path="/solicitud/desaprobado">
            <Desaprobado />
          </Route>

          <Route path="/">
            <div id="master">
              <COMP_Header />
              <COMP_Pasos />
              <div
                style={{
                  backgroundImage: `url(${bk_1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "bottom",
                  backgroundRepeat: "no-repeat",
                  marginTop: "-12px",
                }}
              >
                <COMP_Requisitos />
              </div>
              <COMP_Consultas />
              <COMP_historia />
              <COMP_Cuotas />
              <COMP_Footer />
            </div>
          </Route>
        </Switch>
      </Router>
    )
  }
}
