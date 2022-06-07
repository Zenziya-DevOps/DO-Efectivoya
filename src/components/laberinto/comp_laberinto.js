import React, { Component } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { COMPIdentification } from "../../components/Identification/comp_identification"
import { Box_ } from "../../styles/Box"
import { device } from "../../model/device"
import { label_ } from "../../styles/leters"
import * as contants from "./../../constants"
import bk from "../../images/bk.svg"
import ico from "../../images/ico.svg"
import close from "../../images/close.svg"
import pass_4 from "../../images/pass_4.svg"
import pass_5 from "../../images/pass_5.svg"
import pass_6 from "../../images/pass_6.svg"

export class COMP_Laberinto extends Component {
  render() {
    return (
      <div
        style={{
          background: `url(${bk}) `,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: device.device.type === "desktop" ? "100vh" : "100%",
        }}
      >
        <Container fluid className="h-100">
          <Row className="my-auto d-flex justify-content-center">
            <Col xs={12} className="p-4 w-100">
              <Row>
                <Col xs={6} className="text-left">
                  <img src={`${ico}`} style={{ width: "195px" }} />
                </Col>

                <Col xs={6} className="text-right">
                  <a href="./">
                    <img
                      src={`${close}`}
                      className="img img-fluid"
                      id="xclos"
                    />
                  </a>
                </Col>
              </Row>
            </Col>

            {device.device.type === "desktop" ? (
              <>
                <Col xs={5} className="pt-3 my-auto ">
                  <Row className="d-flex justify-content-center">
                    <Col xs={12} className="p-2 pb-5 text-center">
                      <label style={label_(3, 0, "25px")}>
                        Recuerda los 3 requisitos:
                      </label>
                    </Col>
                    <Col xs={10}>
                      <Row className="p-2">
                        <Col className="h-100">
                          <Row>
                            <Col xs={2} className="my-auto text-center ">
                              <img
                                src={`${pass_4}`}
                                className="img img-fluid"
                                style={{ height: "45px" }}
                              />
                            </Col>

                            <Col style={label_(3, 0, "18px")}>
                              <label className="font-weight-light">
                                Tener un teléfono celular <br /> con línea
                                activa.
                              </label>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>

                    <Col xs={10}>
                      <Row className="p-2">
                        <Col className="h-100">
                          <Row>
                            <Col xs={2} className="my-auto text-center ">
                              <img
                                src={`${pass_5}`}
                                className="img img-fluid"
                                style={{ height: "45px" }}
                              />
                            </Col>

                            <Col style={label_(3, 0, "18px")}>
                              <label className="font-weight-light">
                                Tener una cuenta bancaria <br /> a tu nombre, en
                                RD$ y activa.
                              </label>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>

                    <Col xs={10}>
                      <Row className="p-2">
                        <Col className="h-100">
                          <Row>
                            <Col xs={2} className="my-auto text-center ">
                              <img
                                src={`${pass_6}`}
                                className="img img-fluid"
                                style={{ height: "45px" }}
                              />
                            </Col>

                            <Col style={label_(3, 0, "18px")}>
                              <label className="font-weight-light">
                                Ser dominicano y <br /> mayor de 18 años
                              </label>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>

                <Col xs={5}>
                  <div style={Box_(3, null, "332px")}>
                    <div id="e">
                      <COMPIdentification />
                    </div>
                  </div>
                </Col>
              </>
            ) : (
              <>
                <Col xs={12}>
                  <div style={Box_(3)} id="e">
                    <COMPIdentification />
                  </div>
                </Col>

                <Col xs={12} className="pt-3">
                  <Row>
                    <Col xs={12} className="p-2 text-center">
                      <label style={label_(3, 0, "16px")}>
                        Recuerda los 3 requisitos:
                      </label>
                    </Col>
                    <Col xs={12}>
                      <Row className="p-2">
                        <Col className="ml-auto h-100">
                          <Row>
                            <Col
                              xs={2}
                              className="mx-auto d-flex align-items-center justify-content-center"
                            >
                              <img
                                src={`${pass_4}`}
                                className="img img-fluid"
                                style={{ width: "18px" }}
                              />
                            </Col>
                            <Col style={label_(3, 0, "14px")}>
                              <label className="font-weight-light">
                                Tener un teléfono celular con línea activa.
                              </label>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>

                    <Col xs={12}>
                      <Row className="p-2">
                        <Col className="ml-auto h-100">
                          <Row>
                            <Col
                              xs={2}
                              className="mx-auto d-flex align-items-center justify-content-center"
                            >
                              <img
                                src={`${pass_5}`}
                                className="img img-fluid"
                                style={{ width: "18px" }}
                              />
                            </Col>
                            <Col style={label_(3, 0, "14px")}>
                              <label className="font-weight-light">
                                Tener una cuenta bancaria a tu nombre, en RD$ y
                                activa.
                              </label>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>

                    <Col xs={12}>
                      <Row className="p-2">
                        <Col className="ml-auto h-100">
                          <Row>
                            <Col
                              xs={2}
                              className="mx-auto d-flex align-items-center justify-content-center"
                            >
                              <img
                                src={`${pass_6}`}
                                className="img img-fluid"
                                style={{ width: "18px" }}
                              />
                            </Col>
                            <Col style={label_(3, 0, "14px")}>
                              <label className="font-weight-light">
                                Ser dominicano y mayor de 18 años
                              </label>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </>
            )}

            <Col
              xs={12}
              className={`text-center p-3 ${
                device.device.type === "desktop" ? "fixed-bottom" : ""
              }`}
            >
              <label className="" style={label_(3, 0, "12px")}>
                ©️ C.E.D. S.R.L / Todos los derechos reservados
              </label>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
