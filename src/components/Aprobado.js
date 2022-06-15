import React, { useState } from "react"
import { useLocation } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
import ico from "../images/ico.svg"
import close from "../images/close.svg"
import { Typography, Button } from "@material-ui/core"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import Countdown from "react-countdown"
import aprobado from "../images/img_aprobado.png"

export const Aprobado = () => {
  const location = useLocation()
  const [cedula, setCedula] = useState(0)
  const onRenderer = ({ seconds }) => {
    return <label>En {seconds} segundos avanzará al chat</label>
  }

  useEffect(() => {
    if (!location.state) history.push("/")
    setCedula(location.state.cedula)
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

      <Container className="bwhite">
        <Row>
          <Col className="text-center pt-5">
            <img src={`${aprobado}`} style={{ width: "100px" }} />
            <Typography paragraph={true} className="mt-4 fs-24">
              <b>¡Felicidades!</b>
            </Typography>
            <Typography paragraph={true} className="fs-24">
              Estás aprobado <br /> para recibir el préstamo.
            </Typography>
            <Typography paragraph={true} className="mt-5 mb-4">
              Habla con uno de nuestros asesores para terminar tu solicitud y
              recibir el dinero.
            </Typography>
            <Countdown
              date={Date.now() + 5000}
              renderer={onRenderer}
              onComplete={() => {
                window.location.href =
                  "https://api.whatsapp.com/send/?phone=18494104542&text=Mi+numero+de+c%C3%A9dula+es+" +
                  cedula +
                  "+y+%C2%A1Quiero+un+pr%C3%A9stamo+Efectivo+Ya!&app_absent=0"
              }}
            />
            <Button variant="contained" className="mt-3 btn-zz btn-block mb-5">
              <WhatsAppIcon style={{ marginRight: "5px" }} />
              {"  "} Continuar
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}
