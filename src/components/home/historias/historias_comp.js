import React, { Component } from "react"
import { Container, Carousel, Row, Col } from "react-bootstrap"
import { label_ } from "../../../styles/leters"
import { device } from "../../../model/device"
import start_check from "../../../images/start_check.svg"
import start from "../../../images/start.svg"
import bgk3 from "../../../images/bgk3.svg"
import pass_7 from "../../../images/pass_7.svg"
import pass_8 from "../../../images/pass_8.svg"
import pass_9 from "../../../images/pass_9.svg"
import janet from "../../../images/janet.svg"
import json from "../../../images/json.svg"
import Heiner from "../../../images/heiner.svg"

class COMP_start extends Component {
  constructor(props) {
    super(props)
    this.state = {
      on: [],
      off: [],
    }
  }

  componentDidMount() {
    let a1 = [],
      b1 = []

    for (var a = 1; a <= this.props.on; a++) a1.push(a)

    for (var b = 1; b <= this.props.off; b++) b1.push(b)

    this.setState({ on: a1 })
    this.setState({ off: b1 })
  }

  render() {
    return (
      <>
        {this.state.on.map((x, i) => {
          return (
            <img
              key={i}
              src={`${start_check}`}
              className="img img-fluid"
              style={{ margin: "0.3em" }}
            />
          )
        })}

        {this.state.off.map((x, i) => {
          return (
            <img
              key={i}
              src={`${start}`}
              className="img img-fluid"
              style={{ margin: "0.3em" }}
            />
          )
        })}
      </>
    )
  }
}

class COMP_Hist extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        {device.device.type === "desktop" ? (
          <Row>
            <Col xs={8} className="p-5">
              <label style={{ marginLeft: "-5px" }}>
                <COMP_start on={this.props.on} off={this.props.off} />
              </label>
              <br />
              <label className="font-weight-bold" style={label_(0, 0, "18px")}>
                {this.props.subject}
              </label>{" "}
              <br />
              <label style={label_(1, 0, "12px")}>{this.props.body}</label>
              <br />
              <label className="pt-1" style={label_(2, 0, "16px")}>
                {this.props.name}
              </label>
              <br />
              <p style={{ marginTop: "-15px" }}>
                {" "}
                <label style={label_(1, 0, "10px")}>{this.props.date}</label>
              </p>
            </Col>

            <Col xs={4} className="my-auto mt-5 h-100">
              <img
                src={this.props.SRC}
                className="img img-fluid"
                style={{ height: "100px" }}
              />
            </Col>
          </Row>
        ) : (
          <Row>
            <Col xs={12} className="mt-5">
              <Row className="mb-4">
                <Col xs={4}>
                  {" "}
                  <img
                    src={this.props.SRC}
                    className="img img-fluid"
                    style={{ height: "100px" }}
                  />{" "}
                </Col>
                <Col className="my-auto">
                  <COMP_start on={this.props.on} off={this.props.off} />
                </Col>
              </Row>
            </Col>

            <Col xs={12}>
              <label className="font-weight-bold" style={label_(0, 0, "18px")}>
                {this.props.subject}
              </label>{" "}
              <br />
              <label style={label_(1, 0, "12px")}>{this.props.body}</label>
              <br />
              <label className="pt-1" style={label_(2, 0, "16px")}>
                {this.props.name}
              </label>
              <br />
              <p style={{ marginTop: "-15px" }}>
                {" "}
                <label style={label_(1, 0, "10px")}>{this.props.date}</label>
              </p>
            </Col>
          </Row>
        )}
      </>
    )
  }
}

export class COMP_historia extends Component {
  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <Col xs={device.device.type === "desktop" ? 6 : 12}>
              <Row>
                <div
                  style={{
                    backgroundImage: `url(${bgk3})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <Col xs={12} className="p-5 text-center" id="Quienes">
                    <label
                      className="font-weight-bold"
                      style={label_(3, 0, "30px")}
                    >
                      Quienes somos
                    </label>
                  </Col>

                  <Col xs={12} className="pt-3 pb-3">
                    <div className="pb-5">
                      <Row className="pt-3 pb-3 justify-content-md-center">
                        <Col
                          xs={device.device.type === "desktop" ? 1 : 12}
                          className="pb-3 my-auto text-center"
                        >
                          <img
                            src={`${pass_7}`}
                            className="img img-fluid "
                            style={{ height: "40px" }}
                          />
                        </Col>

                        <Col
                          xs={device.device.type === "desktop" ? 8 : 12}
                          className="my-auto "
                        >
                          <p style={label_(3, 0, "13px")}>
                            Efectivo Ya es un servicio 100% online, donde miles
                            de personas gestionan créditos de rápida aprobación
                            y gran facilidad de pago.
                          </p>
                        </Col>
                      </Row>

                      <Row className="pt-3 pb-3 justify-content-md-center">
                        <Col
                          xs={device.device.type === "desktop" ? 1 : 12}
                          className="pb-3 my-auto text-center"
                        >
                          <img
                            src={`${pass_8}`}
                            className="img img-fluid "
                            style={{ height: "40px" }}
                          />
                        </Col>

                        <Col
                          xs={device.device.type === "desktop" ? 8 : 12}
                          className="my-auto "
                        >
                          <p style={label_(3, 0, "13px")}>
                            Nuestro objetivo es brindar recursos financieros de
                            forma ágil y con requisitos míminos a todos aquellos
                            que necesiten invertir en emprendimientos, resolver
                            imprevistos económicos o simplemente darse un gusto.
                          </p>
                        </Col>
                      </Row>

                      <Row className="pt-3 pb-3 justify-content-md-center">
                        <Col
                          xs={device.device.type === "desktop" ? 1 : 12}
                          className="pb-3 my-auto text-center"
                        >
                          <img
                            src={`${pass_9}`}
                            className="img img-fluid "
                            style={{ height: "40px" }}
                          />
                        </Col>

                        <Col
                          xs={device.device.type === "desktop" ? 8 : 12}
                          className="my-auto "
                        >
                          <p style={label_(3, 0, "13px")}>
                            Tenemos una gran experiencia en tecnología y
                            finanzas. Estamos trabajando de manera responsable
                            en la región desde hace más de 5 años, habiendo
                            entregado más de 10.000 créditos.
                          </p>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </div>
              </Row>
            </Col>

            <Col xs={device.device.type === "desktop" ? 6 : 12}>
              <Row className="pt-5 pb-5 shadow h-100 ">
                <Col xs={12} className="pt-3 text-center">
                  <label
                    className="font-weight-bold"
                    style={label_(0, 0, "30px")}
                  >
                    Historias
                  </label>
                </Col>

                <Col xs={12} className="">
                  <Carousel>
                    <Carousel.Item>
                      <COMP_Hist
                        subject={"Excelente servicio"}
                        body={
                          "Depositaron el dinero en mi cuenta súper rápido. Todo funcionó perfecto!"
                        }
                        name={"Janeth Torres"}
                        date={"Hace 3 días"}
                        SRC={`${janet}`}
                        on={4}
                        off={1}
                      />
                    </Carousel.Item>

                    <Carousel.Item>
                      <COMP_Hist
                        subject={"¡Pude arreglar mi carro!"}
                        body={
                          "Obtuve un préstamo para arreglar mi carro, sin moverme de mi casa."
                        }
                        name={"Jason Fernandez"}
                        date={"Hace 3 días"}
                        SRC={`${json}`}
                        on={5}
                        off={0}
                      />
                    </Carousel.Item>

                    <Carousel.Item>
                      <COMP_Hist
                        subject={"¡Súper rápido!"}
                        body={
                          "Recibí el dinero en mi cuenta en 24 horas. Gracias!!!"
                        }
                        name={"Heiner Lopez"}
                        date={"Hace 3 días"}
                        SRC={`${Heiner}`}
                        on={5}
                        off={0}
                      />
                    </Carousel.Item>
                  </Carousel>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}
