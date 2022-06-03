import React, { Component } from "react"
import ReactDOM from "react-dom"
import { Process, ProcessRealURL } from "../../services/process"
import { product } from "../../model/product"
import { Key } from "../../model/Key"
import { Container, Row, Col, Button, Form } from "react-bootstrap"
import { Slider } from "@material-ui/core"
import { Box_ } from "../../styles/Box"
import { label_ } from "../../styles/leters"
import { Btn_ } from "../../styles/bottom"
//import { Calcular_Cuota } from "../../services/cuotas"
import { colors } from "../../styles/colors"
import { withStyles } from "@material-ui/core/styles"
import Box from "@mui/material/Box"
import LinearProgress from "@mui/material/LinearProgress"
import { next_step } from "../../services/onboring"
import { COMP_Laberinto } from "../../components/laberinto/comp_laberinto"
import "../../css/Btt.css"
import { Trace } from "../../model/trace"
import { Utms } from "../../model/utms"
import interaccionesService from "../../services/interacciones"
import perfilService from "../../services/perfil"
import { cookieValidator } from "../../helpers/cookieValidator"
import { keyOrigen } from "../../constants"
import { step } from "../../constants"
import { getUrl } from "../../helpers/getUrl"
import { device_m } from "../../model/device"

let BtnFrn = []

const ZenziyaSlider = withStyles({
  root: {
    color: colors[1],
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: colors[2],
    border: "2px solid currentColor",
    marginTop: -8,
    color: "white",
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
    backgroundColor: colors[2],
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },

  valueLabel: {
    left: "calc(-100% + 5px)",
    top: "calc(-50% + 35px)",
    width: "10em",
    borderRadius: 4,
    background: "transparent",
    "& *": {
      background: "transparent",
      width: "10em",
      color: colors[4],
    },
  },
})(Slider)

export class COMPCalculadoras extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showLoading: true,
      latitude: "",
      longitude: "",
      ip: "",
      Data: [],
      PlazoSeleccionado: 3,
      cuota: 0,
    }
  }

  Calcular_Cuota() {
    let F = product.Frecuencia == 1 ? 30 : product.Frecuencia
    let R = (product.Tasa / 365) * F
    let C = product.Monto * 1.11
    let M = product.Numero_Cuotas
    let P = C * (R / (1 - (1 + R) ** -M))
    product.Cuota = Math.round(P / 5) * 5
    this.setState({ cuota: product.Cuota })
  }

  /* Variables Calculadora  */
  MontosFinales = React.createRef()
  FrecuenciasFinales = React.createRef()
  QCuotaFinales = React.createRef()
  MesesFinales = React.createRef()
  Moneda = React.createRef()

  JsonServerData = []

  /* Valores Calculadora */

  /* Se trata el objeto para mantener todas las combinaciones  */
  TratamientoComponentes(MontosDb) {
    let MontosDescompuestos = []
    MontosDb.map((element) => {
      for (var i = element.Minimo; i <= element.Maximo; i = i + element.Steps) {
        MontosDescompuestos.push(i)
      }
    })

    /* se ordena los valores*/
    MontosDescompuestos.sort((a, b) => {
      return a - b
    })
    MontosDescompuestos = Array.from(new Set(MontosDescompuestos))
    let masks = new Object()
    let Valores = []

    MontosDescompuestos.map(function (x, index) {
      Valores.push((masks = { value: x, label: null }))
    })

    return Valores
  }

  handleClickFrecuencia = (event) => {
    product.Frecuencia = event.target.id == "Mensual" ? 1 : 15
    this.handleChangePlazo(null, this.state.PlazoSeleccionado)
  }

  handleChangePlazo = (event, value) => {
    this.setState({ PlazoSeleccionado: value })

    switch (product.Frecuencia) {
      case 1: //Mensual
        product.Numero_Cuotas = 1 * value
        break
      case 15: //Quincenal
        product.Numero_Cuotas = 2 * value
        break
    }
    this.Calcular_Cuota()
  }

  handleChangeMonto = (event, value) => {
    product.Monto = value
    this.Calcular_Cuota()
  }

  async Crear_Slider_Montos(objeto) {
    product.Monto = objeto[0]["value"]

    const element = (
      <ZenziyaSlider
        step={null}
        valueLabelDisplay="on"
        valueLabelFormat={
          (this.valuetext = (value) => {
            return `RD$ ${product.Monto}`
          })
        }
        min={objeto[0] ? objeto[0]["value"] : 0}
        max={objeto[objeto.length - 1] ? objeto[objeto.length - 1]["value"] : 0}
        marks={objeto}
        onChange={this.handleChangeMonto}
      />
    )
    ReactDOM.render(element, document.getElementById("SliderMonto"))
  }

  async Crear_Slider_Plazos(objetoQueContieneLosPlazos) {
    switch (product.Frecuencia) {
      case 1:
        product.Numero_Cuotas = 1 * objetoQueContieneLosPlazos[0]["value"]
        break
      case 7:
        product.Numero_Cuotas = 4 * objetoQueContieneLosPlazos[0]["value"]
        break
      case 15:
        product.Numero_Cuotas = 2 * objetoQueContieneLosPlazos[0]["value"]
        break
    }

    const element = (
      <ZenziyaSlider
        step={null}
        valueLabelFormat={
          (this.valuetext = (value) => {
            return `${
              isNaN(value) ? objetoQueContieneLosPlazos[0]["value"] : value
            } Meses `
          })
        }
        valueLabelDisplay="on"
        min={objetoQueContieneLosPlazos[0]["value"]}
        max={
          objetoQueContieneLosPlazos[objetoQueContieneLosPlazos.length - 1][
            "value"
          ]
        }
        marks={objetoQueContieneLosPlazos}
        id="plazos"
        onChange={this.handleChangePlazo}
      />
    )
    ReactDOM.render(element, document.getElementById("SliderMeses"))
  }

  async Inicializador() {
    this.Crear_Slider_Montos(this.MontosFinales)
    this.Crear_Slider_Plazos(this.MesesFinales)
    this.Calcular_Cuota()
    this.setState({
      showLoading: false,
    })
    await Process(Trace, "Log").then(
      (x) => (Trace.Id_Solicitud = x.Id_Solicitud),
      (Trace.Accion = 2)
    )
  }

  handleSubmit = (e) => {
    e.preventDefault()

    if (product.Monto >= 1) {
      ReactDOM.render(<COMP_Laberinto />, document.getElementById("master"))
      interaccionesService.interacciones({
        step: step.OFERTA,
        value: `Frecuencia: ${
          product.Frecuencia == "1" ? "Mensual" : "Quincenal"
        }, Monto: ${product.Monto}, Cuotas: ${product.Numero_Cuotas}`,
        KeyOrigen: keyOrigen,
        idCookie: localStorage.getItem("cookie"),
        timeStamp: new Date(),
      })
      next_step()
    }

    perfilService.perfil({
      IdCookie: localStorage.getItem("cookie"),
      DateConnection: new Date(),
      IpConnection: this.state.ip,
      LatConnection: this.state.latitude,
      LongConnection: this.state.longitude,
      ClientEngine: device_m.client_engine,
      ClientEngineVersion: device_m.client_engineVersion,
      ClientName: device_m.client_name,
      ClientType: device_m.client_type,
      ClientVersion: device_m.client_version,
      DeviceBrand: device_m.device_brand,
      DeviceModel: device_m.device_model,
      DeviceType: device_m.device_type,
      OsName: device_m.os_name,
      OsPlatform: device_m.os_platform,
      OsVersion: device_m.os_version,
      KeyOrigen: keyOrigen,
    })
  }

  async componentDidMount() {
    const response = await fetch("https://geolocation-db.com/json/")
    const data = await response.json()
    this.setState({ ip: data.IPv4 })

    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      })
    })

    let MontosDb = [],
      FrecuenciasDb = [],
      CuotasDb = [],
      MesDb = []
    var Obj = new Object()

    const queryString = window.location.search
    const params = new URLSearchParams(queryString)
    params.forEach((value, key) => {
      if (Utms[key] === "") {
        return (Utms[key] = value)
      }
      Utms.AditionalParams[key] = value
    })
    Utms.AditionalParams = JSON.stringify(Utms.AditionalParams)
    const urlVisita = await getUrl()
    const handleInteraccion = async () => {
      await cookieValidator()
      interaccionesService.interacciones({
        step: step.VISITA,
        value: urlVisita,
        KeyOrigen: keyOrigen,
        idCookie: localStorage.getItem("cookie"),
        utm_source: Utms.utm_source,
        utm_medium: Utms.utm_medium,
        utm_campaign: Utms.utm_campaign,
        utm_content: Utms.utm_content,
        utm_term: Utms.utm_term,
        AditionalParams: Utms.AditionalParams,
        timeStamp: new Date(),
      })
    }
    handleInteraccion()
    Trace.IdCookie = localStorage.getItem("cookie")

    ProcessRealURL(Key, "Calculadora/Datos").then((result) => {
      this.setState({ Data: result })

      this.state.Data.map((x) => {
        this.JsonServerData.push(x)

        /* Utilizado para Montos  */
        MontosDb.push(
          (Obj = {
            Maximo: x.FCO_ValorMax,
            Minimo: x.FCO_ValorMin,
            Steps: x.FCO_ValorStep,
            Resultado: x.FCO_ValorMax / x.FCO_ValorStep,
            Display: x.FCO_Moneda,
          })
        )

        /* Utilizado para Frecuencias */
        FrecuenciasDb.push(
          (Obj = {
            Maximo: x.FCO_FrecuenciaQ,
            Minimo: x.FCO_FrecuenciaQ,
            Steps: x.FCO_FrecuenciaQ,
          })
        )

        /* Utilizado para la cantidad de cuotas*/
        CuotasDb.push(
          (Obj = {
            Maximo: x.FCO_QcuotasMax,
            Minimo: x.FCO_QcuotasMin,
            Steps: x.FCO_QcuotasStep,
            Resultado: x.FCO_QcuotasMax / x.FCO_QcuotasStep,
          })
        )

        /* Utilizado para la cantidad de cuotas*/
        MesDb.push(
          (Obj = {
            Maximo: x.FCO_Mes_Max,
            Minimo: x.FCO_Mes_Min,
            Steps: x.FCO_Mes_Step,
            Resultado: x.FCO_Mes_Max / x.FCO_Mes_Step,
          })
        )
      })

      this.Moneda = this.JsonServerData[0]["FCO_Moneda"]
      this.MontosFinales = this.TratamientoComponentes(
        MontosDb,
        false,
        this.Moneda
      )
      this.FrecuenciasFinales = this.TratamientoComponentes(
        FrecuenciasDb,
        true,
        null
      )
      this.QCuotaFinales = this.TratamientoComponentes(CuotasDb, false, "Meses")
      this.MesesFinales = this.TratamientoComponentes(MesDb, false, "Meses")
      this.Inicializador()
    })
  }

  render() {
    return (
      <>
        <div style={Box_(3, null, "332px")} className="p-3 mb-2 shadow-sm">
          <div id="e">
            <Form onSubmit={this.handleSubmit}>
              <Container fluid>
                <Row>
                  <Col className="pt-1 text-center" xs={12}>
                    <label
                      className="font-weight-bold"
                      style={label_(0, 0, "18px", "center")}
                    >
                      ¡Calcula tu préstamo aquí!
                    </label>
                  </Col>

                  <Col xs={12}>
                    <label className="pt-3" style={label_(0, 0, "14px")}>
                      <span className="font-weight-bold">Frecuencia</span>{" "}
                      <span style={label_(1, 0, "10px")}>
                        (¿Cada cuánto deseas pagar?)
                      </span>{" "}
                    </label>
                    <div>
                      <div className="d-flex justify-content-center row">
                        <button
                          id="Mensual"
                          type="button"
                          className={
                            product.Frecuencia == 1
                              ? "Calc-Active m-1"
                              : "Calc-Desac m-1"
                          }
                          onClick={this.handleClickFrecuencia}
                        >
                          Mensual
                        </button>
                        <button
                          id="Quincenal"
                          type="button"
                          className={
                            product.Frecuencia == 15
                              ? "Calc-Active m-1"
                              : "Calc-Desac m-1"
                          }
                          onClick={this.handleClickFrecuencia}
                        >
                          Quincenal
                        </button>
                      </div>
                    </div>
                  </Col>

                  <Col xs={12}>
                    <label className="pt-4" style={label_(0, 0, "14px")}>
                      <span className="font-weight-bold">Monto</span>{" "}
                      <span style={label_(1, 0, "10px")}>
                        (¿Cuánto dinero necesitas?)
                      </span>{" "}
                    </label>
                    <div className="d-flex justify-content-center">
                      <div
                        style={{ marginTop: "-15px", width: "90%" }}
                        id="SliderMonto"
                      />
                    </div>
                    {this.state.showLoading && (
                      <Box sx={{ width: "100%" }} mt={3} mb={3}>
                        <LinearProgress />
                      </Box>
                    )}
                  </Col>

                  <Col xs={12}>
                    <label className="pt-4" style={label_(0, 0, "14px")}>
                      <span className="font-weight-bold">Plazo</span>{" "}
                      <span style={label_(1, 0, "10px")}>
                        (¿En cuánto tiempo lo quieres pagar?)
                      </span>{" "}
                    </label>
                    <div className="d-flex justify-content-center">
                      <div
                        style={{ marginTop: "-15px", width: "90%" }}
                        id="SliderMeses"
                      />
                    </div>
                    {this.state.showLoading && (
                      <Box sx={{ width: "100%" }} mt={3} mb={3}>
                        <LinearProgress />
                      </Box>
                    )}
                  </Col>

                  <Col xs={12} className="pt-4 text-center">
                    <label
                      className="font-weight-bold"
                      style={label_(2, 0, "18px")}
                    >
                      <span>
                        <label>{product.Numero_Cuotas}</label>
                      </span>
                      <span style={label_(0, 0)}> cuotas de </span>
                      <span style={label_(2, 0)}>RD$ </span>
                      <span style={label_(2, 0)}>{this.state.cuota}</span>
                    </label>
                  </Col>

                  <Col xs={12} className="text-center">
                    <Button
                      className="font-weight-bold"
                      style={Btn_(2, 2, 3, "90%")}
                      type="submit"
                      id="paso1"
                    >
                      Continuar
                    </Button>
                  </Col>
                </Row>
              </Container>
            </Form>
          </div>
        </div>
      </>
    )
  }
}
