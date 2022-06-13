import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { COMPIdentification } from "../components/Identification/comp_identification"
import ico from "../images/ico.svg"
import close from "../images/close.svg"

export const IngresoCedula = () => {
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
          <Col>
            <COMPIdentification />
          </Col>
        </Row>
      </Container>
    </>
  )
}
