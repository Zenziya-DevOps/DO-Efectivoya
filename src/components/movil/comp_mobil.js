import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { useHistory } from "react-router-dom"
import ico from "../../images/ico.svg"
import close from "../../images/close.svg"
import { Typography } from "@mui/material"
import HelpOutlineIcon from "@mui/icons-material/HelpOutline"
import { Container, Row, Col } from "react-bootstrap"
import {
  Dialog,
  Button,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions,
} from "@mui/material"
import TextField from "@mui/material/TextField"
import InfoIcon from "@mui/icons-material/Info"
import { Trace } from "../../model/trace"
import "../../css/placeholder.css"
import interaccionesService from "../../services/interacciones"
import Countdown from "react-countdown"

export const COMPMobile = () => {
  const history = useHistory()
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [isValidCellphone, setIsValidCellphone] = useState(false)
  const [celular, setCelular] = useState(0)

  useEffect(() => {
    if (!location.state) history.push("/")
  }, [])

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const sendSms = (e) => {
    const celular = e.target.value
    if (celular.length === 10) {
      debugger
      setIsValidCellphone(true)
      setCelular(celular)
    }
  }

  const onRenderer = ({ seconds }) => {
    return <label>En {seconds} segundos avanza siguiente paso</label>
  }

  const goToValidarResultado = () => {
    debugger
    history.push({
      pathname: `/validacion_otp_resultado`,
      state: { celular, credito: location.state.credito },
    })
  }
  return (
    <>
      <Container
        style={{
          backgroundColor: "#3A68AD",
        }}
      >
        <Row className="pt-3 pb-3">
          <Col xs={6} className="text-left">
            <img src={`${ico}`} style={{ width: "195px" }} />
          </Col>

          <Col xs={6} className="text-right">
            <a href="/">
              <img src={`${close}`} className="img img-fluid" id="xclos" />
            </a>
          </Col>
        </Row>
      </Container>
      <Container className="bwhite">
        <Container className="pt-3">
          <Row>
            <Col>
              <Typography className="title" paragraph={true}>
                Número de celular
              </Typography>
              <Typography>Te vamos a enviar un código por sms</Typography>
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
                label="Número de celular"
                className="w100p"
                onChange={sendSms}
                inputProps={{
                  style: {
                    textAlign: "center",
                  },
                }}
              />
            </Col>
          </Row>

          <Row className="mt-3">
            <Col className="text-center">
              {isValidCellphone && (
                <Countdown
                  date={Date.now() + 3000}
                  renderer={onRenderer}
                  onComplete={goToValidarResultado}
                />
              )}
            </Col>
          </Row>

          <Row className="mt-5 pt-5">
            <Col>
              <Button
                variant="contained"
                className="btn-block btn-zz bottom"
                onClick={goToValidarResultado}
              >
                Continuar
              </Button>
            </Col>
          </Row>
        </Container>
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
              ¿Por qué te pedimos <br /> tu celu?
            </b>
          </DialogContentText>
          <DialogContentText className="text-center mt-3">
            Necesitamos tu número de celu para poder comunicarte novedades sobre
            tu préstamo.
          </DialogContentText>
          <Button onClick={handleClose} className="btn-zz btn-block mt-5">
            Entendido
          </Button>
        </DialogContent>
      </Dialog>
    </>
  )
}
