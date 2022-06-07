import React, { Component } from "react"
import { label_ } from "../../styles/leters"
import { Container, Row, Col } from "react-bootstrap"
import { device } from "../../model/device"
import pass_4 from "../../images/pass_4.svg"
import pass_5 from "../../images/pass_5.svg"
import pass_6 from "../../images/pass_6.svg"

export class COMP_Requisitos extends Component {
  render() {
    return (
      <>
        <div>
          <Container fluid id="Requisito" className="pt-3 pb-3">
            <Row>
              <Col
                xs={device.device.type === "desktop" ? 12 : 0}
                className="pt-5 text-center"
              >
                <label
                  className="font-weight-bold"
                  style={label_(3, 0, "30px")}
                >
                  Solo 3 requisitos:
                </label>
                <p style={label_(3, 0, "17px")}>
                  Y muchas ganas de tener tu efectivo ya!
                </p>
              </Col>

              <Col xs={12} className="pt-3 pb-5">
                <Row>
                  <Col
                    xs={device.device.type === "desktop" ? 0 : 12}
                    className="mt-5 text-center"
                  >
                    <Col xs={12}>
                      <img
                        src={`${pass_4}`}
                        className="img img-fluid"
                        style={{ height: "45px" }}
                      />
                    </Col>
                    <Col xs={12} className="mt-3">
                      <span className="mb-0" style={label_(3, 0, "17px")}>
                        Tener un teléfono celular
                      </span>
                      <br />
                      <span className="mb-0" style={label_(3, 0, "17px")}>
                        con línea activa.
                      </span>
                    </Col>
                  </Col>

                  <Col
                    xs={device.device.type === "desktop" ? 0 : 12}
                    className="mt-5 text-center"
                  >
                    <Col xs={12}>
                      <img
                        src={`${pass_5}`}
                        className="img img-fluid"
                        style={{ height: "45px" }}
                      />
                    </Col>
                    <Col xs={12} className="mt-3">
                      <span className="mb-0" style={label_(3, 0, "17px")}>
                        Tener una cuenta bancaria
                      </span>
                      <br />
                      <span className="mb-0" style={label_(3, 0, "17px")}>
                        a tu nombre, en RD$ y activa.
                      </span>
                    </Col>
                  </Col>

                  <Col
                    xs={device.device.type === "desktop" ? 0 : 12}
                    className="mt-5 text-center"
                  >
                    <Col xs={12}>
                      <img
                        src={`${pass_6}`}
                        className="img img-fluid"
                        style={{ height: "45px" }}
                      />
                    </Col>
                    <Col xs={12} className="mt-3">
                      <span className="mb-0" style={label_(3, 0, "17px")}>
                        Ser dominicano y
                      </span>
                      <br />
                      <span className="mb-0" style={label_(3, 0, "17px")}>
                        mayor de 18 años
                      </span>
                    </Col>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    )
  }
}
