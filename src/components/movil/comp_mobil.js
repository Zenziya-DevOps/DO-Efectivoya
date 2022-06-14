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
import { keyOrigen } from "../../constants"
import Countdown from "react-countdown"
import bk from "../../images/bk.svg"

import acceptz from "../../images/acceptz.svg"
import accept from "../../images/accept.svg"
import error from "../../images/error.svg"

export const COMPMobile = () => {
  const history = useHistory()
  const location = useLocation()
  const [open, setOpen] = useState(false)

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
      const otp = 1234
      history.push({
        pathname: `/validacion_otp_resultado`,
        state: { celular, otp, credito: location.state.credito },
      })
    }
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
      <Container className="pt-3 pb-1">
        <Row>
          <Col xs={12}>
            <Typography className="title" paragraph={true}>
              Número de celular
            </Typography>
            <Typography>Te vamos a enviar un código por sms</Typography>
          </Col>
        </Row>

        <Row>
          <Col xs={12} className="pt-3 pb-4">
            <span onClick={handleClickOpen} className="violet">
              <HelpOutlineIcon /> ¿Por qué lo pedimos?
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
            />
          </Col>
        </Row>

        <Row className="mt-5 pt-5">
          <Col>
            <Button variant="contained" className="btn-block btn-zz bottom">
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
          <InfoIcon />
        </DialogTitle>
        <DialogContent>
          <DialogContentText className="text-center fs-25">
            ¿Por qué te pedimos tu celu?
          </DialogContentText>
          <DialogContentText className="text-center mt-3">
            Necesitamos tu número de celu para poder comunicarte novedades sobre
            tu préstamo.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Entendido</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
