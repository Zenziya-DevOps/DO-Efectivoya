import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { useHistory } from "react-router-dom"
import ico from "../../images/ico.svg"
import close from "../../images/close.svg"
import { Typography } from "@mui/material"
import { Container, Row, Col } from "react-bootstrap"
import { Button } from "@mui/material"
import TextField from "@mui/material/TextField"
import { Trace } from "../../model/trace"
import "../../css/placeholder.css"
import interaccionesService from "../../services/interacciones"
import Countdown from "react-countdown"

export const OtpValidacion = () => {
  const history = useHistory()
  const location = useLocation()

  useEffect(() => {
    if (!location.state) history.push("/")
  }, [])

  const validateOtp = (e) => {
    const otp = e.target.value
    if (otp == location.state.otp) {
      var { credito, celular } = location.state
      credito.Celular = celular
      //debugger
      history.push({ pathname: `/procesar_solicitud`, state: { credito } })
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
              Te enviamos un código al {location.state.celular}
            </Typography>
            <Typography paragraph={true} className="mt-5">
              Ingresalo aqui:
            </Typography>
          </Col>
        </Row>

        <Row>
          <Col className="text-center">
            <TextField
              type="number"
              maxLength="11"
              className="w50p"
              variant="standard"
              inputProps={{
                style: {
                  textAlign: "center",
                  borderRadius: "5px",
                  fontSize: "2rem",
                  letterSpacing: "10px",
                },
              }}
              onChange={validateOtp}
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

        <Row className="mt-3">
          <Col>
            <Button variant="text" className="btn-block violet">
              Ingresar otro número de celular
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}
