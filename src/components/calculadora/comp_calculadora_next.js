import React, { Component } from "react"
import { Container, Row, Col, Button, Form } from "react-bootstrap"
import "../../css/Btt.css"
import bk from "../../images/bk.svg"
import ico from "../../images/ico.svg"

export class COMP_Calculadora_Next extends Component {
  render() {
    return (
      <div
        className="pt-5 pb-5 "
        style={{
          backgroundImage: `url(${bk})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container fluid>
          <Row className="h-100">
            <Col xs={12} className="text-rigth">
              <img src={`${ico}`} alt="icon" />
            </Col>

            <Col xs={12}></Col>
          </Row>
        </Container>
      </div>
    )
  }
}
