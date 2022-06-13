import React, { Component } from "react"
import { Accordion, Button, Container, Row, Col } from "react-bootstrap"
import { label_ } from "../../../styles/leters"
import { Btn_ } from "../../../styles/bottom"
import "../../../css/preguntas.css"
import * as constant from "../../../constants"

import bk_3 from "../../../images/bk_3.svg"
const land = process.env.REACT_APP_LAND

export class COMP_Consultas extends Component {
  constructor(props) {
    super(props)
    this.state = {
      element: constant.preguntasFrecuentes,
      col: 0,
    }
  }

  render() {
    return (
      <>
        <div
          style={{
            backgroundImage: `url(${bk_3})`,
            backgroundSize: "cover",
            backgroundPosition: "top , rigth",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Container id="Ayuda" className="pt-5 pb-5 pl-3 pr-3">
            <Row className="pb-5 mt-3">
              <Col xs={12} className="pt-5 text-center">
                <label
                  className="font-weight-bold"
                  style={label_(0, 0, "30px")}
                >
                  Todo lo que necesitas saber:
                </label>
              </Col>

              <Col xs={12} className="pt-3">
                <Accordion defaultActiveKey="0">
                  {this.state.element.map((x, i) => {
                    return (
                      <Accordion.Item eventKey={i} key={i}>
                        <Accordion.Header>{x.Header}</Accordion.Header>
                        <Accordion.Body>{x.Contenido}</Accordion.Body>
                      </Accordion.Item>
                    )
                  })}
                </Accordion>
              </Col>

              <Col xs={12} className="mt-5 mb-5 text-center">
                <a href={`${land}Preguntas`}>
                  <Button
                    className="p-3 bg-white shadow font-weight-bold"
                    style={Btn_(3, 3, 2, "275px")}
                    type="submit"
                  >
                    Más preguntas frecuentes
                  </Button>
                </a>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    )
  }
}
