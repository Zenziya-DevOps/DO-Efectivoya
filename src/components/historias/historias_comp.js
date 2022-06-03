import React, { Component } from "react"
import { Container, Carousel, Row, Col } from "react-bootstrap"
import { label_ } from "../../styles/leters"
import { device } from "../../model/device"
import * as constant from "../../constants"
const assets = process.env.REACT_APP_ASSETS

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
              src={`${assets}start_check.svg`}
              className="img img-fluid"
              style={{ margin: "0.3em" }}
            />
          )
        })}

        {this.state.off.map((x, i) => {
          return (
            <img
              key={i}
              src={`${assets}start.svg`}
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
                    backgroundImage: `url(${assets}bgk3.svg)`,
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
                      {constant.quienesSomos.map((x) => {
                        return (
                          <Row className="pt-3 pb-3 justify-content-md-center">
                            <Col
                              xs={device.device.type === "desktop" ? 1 : 12}
                              className="pb-3 my-auto text-center"
                            >
                              <img
                                src={`${assets}${x.Source}`}
                                className="img img-fluid "
                                style={{ height: "40px" }}
                              />
                            </Col>

                            <Col
                              xs={device.device.type === "desktop" ? 8 : 12}
                              className="my-auto "
                            >
                              <p style={label_(3, 0, "13px")}>{x.Contenido}</p>
                            </Col>
                          </Row>
                        )
                      })}
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
                        SRC={`${assets}janet.svg`}
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
                        SRC={`${assets}json.svg`}
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
                        SRC={`${assets}Heiner.svg`}
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
