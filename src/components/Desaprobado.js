import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Typography } from "@mui/material"
import ico from "../images/ico.svg"
import close from "../images/close.svg"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"

export const Desaprobado = () => {
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
        <Row>
          <Col>
            <Typography paragraph={true} className="text-center white">
              ¡Lo sentimos! <br /> no podemos prestarte dinero
            </Typography>
          </Col>
        </Row>
      </Container>

      <Container
        style={{
          backgroundColor: "#F8F8F8",
          height: "100vh",
        }}
      >
        <Row>
          <Col className="mt-5 mb-3">
            <Typography paragraph={true} className="">
              Algunas recomendaciones:
            </Typography>
          </Col>
        </Row>
        <Row>
          <Col
            className="bwhite mr-3 ml-3 pt-3 pb-3"
            style={{ borderRadius: "10px" }}
          >
            <ul>
              <li style={{ lineHeight: "35px" }}>
                Verifica tu ingresos mensuales. Es importante poder comprobar tu
                actividad y continuidad laboral.
              </li>
              <li style={{ lineHeight: "35px" }}>Paga tus cuentas a tiempo.</li>
              <li style={{ lineHeight: "35px" }}>
                Intenta mantener los saldos de tus tarjetas de credito por
                debajo de 35% de tus límites.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  )
}
