import React, { useEffect } from "react"
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
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { COMP_Header_real } from "../components/home/header/comp_header_real"
import { Aprobado } from "../components/Aprobado"
import { Desaprobado } from "../components/Desaprobado"

import api_efectivoya from "./../services/api_efectivoya"
import { step } from "./../constants"
import { getCookie } from "../helpers"
import OnBoard from "../components/onboarding"

export const Vw_OnBoarding = () => {
  useEffect(async () => {
    const response = await fetch("https://geolocation-db.com/json/")
    const data = await response.json()
    api_efectivoya.interacciones({
      step: step.VISITA,
      value: JSON.stringify(data),
      idCookie: getCookie(),
      url: window.location.href,
    })
  }, [])

  return (
    <Router>
      <Switch>
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

        <Route path="/solicitud/rechazado">
          <Desaprobado />
        </Route>

        <Route exact path="/">
            <OnBoard/>
        </Route>
      </Switch>
    </Router>
  )
}
