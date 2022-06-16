import React, { useEffect, useState } from "react"
import { Process } from "../../services/process"
import { Typography } from "@mui/material"
import { Container, Row, Col } from "react-bootstrap"
import { Trace } from "../../model/trace"
import interaccionesService from "../../services/interacciones"
import { keyOrigen } from "../../constants"
import { step } from "../../constants"
import { cookieValidator } from "../../helpers/cookieValidator"
import { useParams, useHistory } from "react-router-dom"
import Countdown from "react-countdown"
import HelpOutlineIcon from "@mui/icons-material/HelpOutline"
import TextField from "@mui/material/TextField"
import InfoIcon from "@mui/icons-material/Info"
import {
  Dialog,
  Button,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions,
} from "@mui/material"

const esCedulaValida = (cedula) => {
  cedula = cedula.replace(/-/g, "").padStart(11, "0")
  var cedula_sin_digito_verificador = cedula.substr(0, cedula.length - 1)
  var digito_verificador = cedula.substr(cedula.length - 1, 1)
  var suma = 0

  if (cedula.length < 11) return false

  for (var i = 0; i < cedula_sin_digito_verificador.length; i++) {
    var mod = ""

    if (i % 2 == 0) {
      mod = 1
    } else {
      mod = 2
    }

    var res = cedula_sin_digito_verificador.substr(i, 1) * mod

    if (res > 9) {
      res = res.toString()
      res = eval(res.substr(0, 1)) + eval(res.substr(1, 1))
    }
    suma += eval(res)
  }
  var el_numero = (10 - (suma % 10)) % 10

  return (
    el_numero == digito_verificador &&
    cedula_sin_digito_verificador.substr(0, 3) != "000"
  )
}

export const COMPIdentification = () => {
  let { monto } = useParams()
  let history = useHistory()
  const [isValidCode, setIsValidCode] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [cedula, setCedula] = useState(0)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    cookieValidator()
    Trace.Ofert = true
    Trace.Identificacion = true
    Process(Trace, "Log")
  }, [])

  const handleChangeDocument = async (e) => {
    setErrorMessage("")
    const { value } = e.target

    if (value.length > 8) {
      interaccionesService.interacciones({
        step: step.INGRESA_IDENTIFICACION,
        value: value,
        KeyOrigen: keyOrigen,
        idCookie: localStorage.getItem("cookie"),
        timeStamp: new Date(),
      })

      if (!esCedulaValida(value)) {
        interaccionesService.interacciones({
          step: step.IDENTIFICACION_INVALIDA,
          value: value,
          KeyOrigen: keyOrigen,
          idCookie: localStorage.getItem("cookie"),
          timeStamp: new Date(),
        })
        setErrorMessage("La cédula ingresada no es válida")
      } else {
        interaccionesService.interacciones({
          step: step.VALIDA_IDENTIFICACION,
          value: value,
          KeyOrigen: keyOrigen,
          idCookie: localStorage.getItem("cookie"),
          timeStamp: new Date(),
        })

        setIsValidCode(true)
        setCedula(value)
      }
    }
  }

  const onRenderer = ({ seconds }) => {
    return <label>En {seconds} segundos avanza siguiente paso</label>
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const goToCalculadoraReal = () => {
    // interaccionesService.interacciones({
    //   step: step.OFERTA,
    //   value: `Monto: ${monto}`,
    //   idCookie: localStorage.getItem("cookie"),
    //   timeStamp: new Date(),
    // })
    if (cedula == 0) {
      setErrorMessage("Ingrese una cédula válida")
    } else {
      history.push(`/oferta_real/${cedula}/${monto}`)
    }
  }

  return (
    <>
      <Container className="pt-3 pb-1">
        <Row>
          <Col xs={12}>
            <Typography className="title">
              Ingresa tu número <br /> de cédula
            </Typography>
          </Col>
        </Row>

        <Row>
          <Col className="pt-3 pb-4">
            <span onClick={handleClickOpen} className="violet">
              <HelpOutlineIcon className="fs-15" /> ¿Por qué lo pedimos?
            </span>
          </Col>
        </Row>

        <Row>
          <Col>
            <TextField
              type="number"
              maxLength="11"
              label="Número de cédula"
              onChange={handleChangeDocument}
              className="w100p"
              inputProps={{
                style: {
                  textAlign: "center",
                },
              }}
            />
          </Col>
        </Row>

        <Row className="mt-3 mb-2 pb-5 mt-3 text-center">
          <Col>
            <Typography>
              {errorMessage}
              {isValidCode && (
                <Countdown
                  date={Date.now() + 3000}
                  renderer={onRenderer}
                  onComplete={goToCalculadoraReal}
                />
              )}
            </Typography>
          </Col>
        </Row>
        <Row className="mt-5 pt-5">
          <Col>
            <Button
              variant="contained"
              className="btn-zz bottom btn-block"
              onClick={goToCalculadoraReal}
            >
              Continuar
            </Button>
          </Col>
        </Row>
      </Container>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          style={{ cursor: "move" }}
          id="draggable-dialog-title"
          className="text-center"
        >
          <InfoIcon className="violet fs-30" />
        </DialogTitle>
        <DialogContent>
          <DialogContentText className="text-center fs-22">
            <b>
              ¿Por qué te pedimos <br />
              tu cédula?
            </b>
          </DialogContentText>
          <DialogContentText className="text-center mt-4">
            Necesitamos tu cédula para proteger tu identidad y evitar casos de
            fraude.
          </DialogContentText>
          <Button onClick={handleClose} className="btn-zz btn-block mt-5">
            Entendido
          </Button>
        </DialogContent>
      </Dialog>
    </>
  )
}
