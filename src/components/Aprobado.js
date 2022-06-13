import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import ico from "../images/ico.svg"
import close from "../images/close.svg"
import { Typography, Button } from "@material-ui/core"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"

export const Aprobado = () => {
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

      <Container>
        <Row>
          <Col className="text-center">
            <Typography paragraph={true} className="mt-5 fs-24">
              ¡Felicidades!
            </Typography>
            <Typography paragraph={true} className="fs-24">
              Estás aprobado <br /> para recibir el préstamo.
            </Typography>
            <Typography paragraph={true} className="mt-5">
              Habla con uno de nuestros asesores para terminar tu solicitud y
              recibir el dinero.
            </Typography>

            <Button variant="contained" className="mt-5 btn-zz">
              <WhatsAppIcon style={{ marginRight: "5px" }} />
              {"  "} Continuar
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}
