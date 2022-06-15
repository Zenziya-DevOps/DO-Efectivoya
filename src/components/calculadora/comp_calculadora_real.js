import React, { useEffect, useState } from "react"
import credito from "../../model/credito"
import DeviceDetector from "device-detector-js"
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"
import api_efectivoya from "../../services/api_efectivoya"
import "../../css/Btt.css"
import Box from "@mui/material/Box"
import Slider from "@mui/material/Slider"
import Button from "@mui/material/Button"
import CircularProgress from "@mui/material/CircularProgress"

const deviceDetector = new DeviceDetector()
const userAgent = window.navigator.userAgent
const device = deviceDetector.parse(userAgent)
var cantidadDeCuotas = 0
var fee = 1
var tasa = 1

const CalculadoraReal = () => {
  let { cedula, monto } = useParams()
  const [datosCalculadora, setDatosCalculadora] = useState({})
  //const [montoCalculadora, setMontoCalculadora] = useState(parseInt(monto))
  const [montoCalculadora, setMontoCalculadora] = useState(0)
  const [plazoCalculadora, setPlazoCalculadora] = useState(0)
  const [frecuenciaCalculadora, setFrecuenciaCalculadora] = useState(1)

  const [mensajeCuota, setMensajeCuota] = useState("")
  const [showLoading, setShowLoading] = useState(true)

  let history = useHistory()

  useEffect(async () => {
    var result = await api_efectivoya.getCalculadoraReal(cedula)
    if (result.Rejected) {
      history.push("/solicitud/rechazado")
    } else {
      setDatosCalculadora(result.Done)
      setMontoCalculadora(result.Done.MontoDefaultMensual)
      setPlazoCalculadora(result.Done.PlazoDefaultMensual)
      tasa = result.Done.TasaMensual
      fee = result.Done.Fee

      Calcular_Cuota(
        result.Done.MontoDefaultMensual,
        result.Done.PlazoDefaultMensual,
        frecuenciaCalculadora,
        result.Done.TasaMensual
      )

      setShowLoading(false)
    }
  }, [])

  function Calcular_Cuota(monto, plazo, frecuencia) {
    var monto = monto || montoCalculadora
    var plazo = plazo || plazoCalculadora
    var frecuencia = frecuencia || frecuenciaCalculadora

    let F = frecuencia == 1 ? 30 : 15
    let R = (tasa / 100 / 365) * F
    let montoConFee = monto * (1 + fee)
    cantidadDeCuotas = frecuencia == 1 ? plazo : plazo * 2
    let P = montoConFee * (R / (1 - (1 + R) ** -cantidadDeCuotas))
    let valorCuota = Math.round(P / 5) * 5

    setMensajeCuota(
      `<b class="violet">${cantidadDeCuotas}</b> cuotas de <b class="violet">RD$ ${valorCuota
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</b>`
    )
  }

  function valuetext(value) {
    return `RD$ ${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`
  }

  function plazoFormat(value) {
    return `${value} meses`
  }

  const handleChangeFrecuencia = (event, value) => {
    setFrecuenciaCalculadora(event.target.value)
    Calcular_Cuota(null, null, event.target.value)
  }

  const handleChangeMonto = (event, value) => {
    setMontoCalculadora(value)
    Calcular_Cuota(value)
  }

  const handleChangePlazo = (event, value) => {
    setPlazoCalculadora(parseInt(value))
    Calcular_Cuota(null, value)
  }

  const submit = async () => {
    const response = await fetch("https://geolocation-db.com/json/")
    const data = await response.json()

    credito.frecuenciaSolicitada = frecuenciaCalculadora
    credito.cantCuotasSolicitadas = cantidadDeCuotas
    credito.montoSolicitado = montoCalculadora
    credito.cedula = cedula
    credito.celular = null
    credito.marca = device.device.brand
    credito.modelo = device.device.model
    credito.campana = 1
    credito.tipoDispositivo = device.device.type
    credito.idCookie = localStorage.getItem("cookie")
    credito.ipConnection = data.IPv4

    history.push({ pathname: `/validacion_otp`, state: { credito } })
  }

  return (
    <>
      {showLoading ? (
        <Box className="calculadora-real" pr={5} pl={5} pt={3} pb={3} xs={12}>
          <Box className="text-center">
            <CircularProgress />
          </Box>
        </Box>
      ) : (
        <>
          <Box xs={12} className="my-auto text-center pt-1 white">
            <p className="fs-32">
              <b>
                Tienes RD $
                {datosCalculadora.MontoDefaultMensual.toString().replace(
                  /\B(?=(\d{3})+(?!\d))/g,
                  "."
                )}{" "}
                disponibles
              </b>
            </p>
          </Box>
          <Box className="calculadora-real" pr={5} pl={5} pt={3} pb={3}>
            <Box>
              <span>Cuota</span>
              <div className="d-flex justify-content-center row">
                <button
                  type="button"
                  className={
                    frecuenciaCalculadora == 1
                      ? "Calc-Active m-1"
                      : "Calc-Desac m-1"
                  }
                  value="1"
                  onClick={handleChangeFrecuencia}
                >
                  Mensual
                </button>
                <button
                  type="button"
                  className={
                    frecuenciaCalculadora == 15
                      ? "Calc-Active m-1"
                      : "Calc-Desac m-1"
                  }
                  value="15"
                  onClick={handleChangeFrecuencia}
                >
                  Quincenal
                </button>
              </div>
            </Box>

            <Box mt={3}>
              <span>¿Cuanto vas a pedir?</span>
              <Slider
                aria-label="Always visible"
                valueLabelFormat={valuetext}
                value={montoCalculadora}
                step={1000}
                min={datosCalculadora.MontoMinMensual}
                max={datosCalculadora.MontoMaxMensual}
                onChange={handleChangeMonto}
                valueLabelDisplay="on"
              />
            </Box>

            <Box mt={2}>
              <span>Plazo</span>
              <Slider
                aria-label="Always visible"
                valueLabelFormat={plazoFormat}
                value={plazoCalculadora}
                step={1}
                min={datosCalculadora.PlazoMinMensual}
                max={datosCalculadora.PlazoMaxMensual}
                onChange={handleChangePlazo}
                valueLabelDisplay="on"
              />
            </Box>
            <Box className="text-center" mb={2} mt={3}>
              <div
                className="fs-22"
                dangerouslySetInnerHTML={{ __html: mensajeCuota }}
              />
            </Box>
            <Box alignItems="center">
              <Button
                onClick={submit}
                variant="contained"
                className="btn-block btn-zz"
              >
                Solicitar ahora
              </Button>
            </Box>
          </Box>
        </>
      )}
    </>
  )
}

export default CalculadoraReal
