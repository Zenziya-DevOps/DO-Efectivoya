import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useHistory } from "react-router-dom"
import ico from "../images/ico.svg"
import close from "../images/close.svg"
import { Typography } from "@mui/material"
import { Container, Row, Col } from "react-bootstrap"
import LinearProgress from "@mui/material/LinearProgress"

import api_efectivoya from "./../services/api_efectivoya"

export const ProcesarSolicitud = () => {
  const history = useHistory()
  const location = useLocation()

  useEffect(async () => {
    if (!location.state) history.push("/")
    const { credito } = location.state
    const result = await api_efectivoya.doScoring(credito)
    if (result.ShortScoring === "Done") {
      history.push("/solicitud/aprobado")
    } else {
      history.push("/solicitud/rechazado")
    }
  }, [])

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
      <Container className="pt-5 mt-4 pb-1 text-center">
        <Col xs={12}>
          <Typography className="title fs-22 mt-3 mb-5 pb-5" paragraph={true}>
            Estamos chequeando la información
          </Typography>
        </Col>
        <Col xs={12}>
          <Row>
            <Col xs={{ span: 6, offset: 3 }}>
              <Typography className="title mt-5 mb-5" paragraph={true}>
                <LinearProgress />
              </Typography>
            </Col>
          </Row>
        </Col>
        <Col xs={12}>
          <Typography className="title fs-22 mt-5 pt-5" paragraph={true}>
            Espera un momento...
          </Typography>
        </Col>
      </Container>
    </>
  )
}
