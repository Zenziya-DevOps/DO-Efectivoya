import React, { useEffect, useState } from "react"
import credito from "../../model/credito"
import DeviceDetector from "device-detector-js"
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { getCalculadoraReal } from "../../services/api_efectivoya"
import "../../css/Btt.css"
import Box from "@mui/material/Box"
import Slider from "@mui/material/Slider"
import Button from "@mui/material/Button"

const deviceDetector = new DeviceDetector()
const userAgent = window.navigator.userAgent
const device = deviceDetector.parse(userAgent)

const CalculadoraReal = () => {
  let { cedula, monto } = useParams()
  const [montoCalculadora, setMontoCalculadora] = useState(parseInt(monto))
  const [plazoCalculadora, setPlazoCalculadora] = useState(5)
  const [frecuenciaCalculadora, setFrecuenciaCalculadora] = useState(1)
  const [mensajeCuota, setMensajeCuota] = useState("")
  let history = useHistory()

  useEffect(async () => {
    await getCalculadoraReal(cedula)
    Calcular_Cuota()
  }, [])

  function Calcular_Cuota(monto, plazo, frecuencia) {
    var monto = monto || montoCalculadora
    var plazo = plazo || plazoCalculadora
    var frecuencia = frecuencia || frecuenciaCalculadora
    var tasa = 2.2

    let F = frecuencia == 1 ? 30 : 15
    let R = (tasa / 365) * F
    let C = monto * 1.11
    let plazoReal = frecuencia == 1 ? plazo : plazo * 2
    let P = C * (R / (1 - (1 + R) ** -plazoReal))
    let valorCuota = Math.round(P / 5) * 5

    setMensajeCuota(
      `<b class="violet">${plazoReal}</b> cuotas de <b class="violet">RD$ ${valorCuota}</b>`
    )
  }

  function valuetext(value) {
    return `RD$ ${value}`
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

    credito.Frecuencia = frecuenciaCalculadora
    credito.CantidadCuotas = plazoCalculadora
    credito.Monto = montoCalculadora
    credito.Cedula = cedula
    credito.Celular = null
    credito.Marca = device.device.brand
    credito.Modelo = device.device.model
    credito.Campana = 1
    credito.TipoDispositivo = device.device.type
    credito.IdCookie = localStorage.getItem("cookie")
    credito.IpConnection = data.IPv4

    history.push({ pathname: `/validacion_otp`, state: { credito } })
  }

  return (
    <>
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
                frecuenciaCalculadora == 2
                  ? "Calc-Active m-1"
                  : "Calc-Desac m-1"
              }
              value="2"
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
            min={5000}
            max={10000}
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
            min={3}
            max={6}
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
  )
}

export default CalculadoraReal
