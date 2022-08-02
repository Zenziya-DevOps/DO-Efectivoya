import React, { Component } from "react"
import { label_ } from "../../../styles/leters"
import { Container, Row, Col } from "react-bootstrap"
import { device } from "../../../model/device"
import bk_2 from "../../../images/bk_2.svg"
import pass_1 from "../../../images/pass_1.svg"
import pass_2 from "../../../images/pass_2.svg"
import pass_3 from "../../../images/pass_3.svg"
import { useContext } from "react"
import { UXUIContext } from "../../../context/UxUIProvider"

export class COMP_Pasos extends Component {

  render() {
      
    return (
      <>
        <div
          style={{
            backgroundImage: `url(${bk_2})`,
            backgroundSize: "contain , cover",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Container fluid className="pt-3 pb-3">
            <Row>
              <Col
                xs={device.device.type === "desktop" ? 12 : 0}
                className="pt-3 pb-1 text-center"
              >
                <label
                  className="font-weight-bold"
                  style={label_(0, 0, "30px", null, "136.7%")}
                >
                  Tu préstamo en 3 pasos:
                </label>
                <p className="font-weight-normal" style={label_(0, 0, "17px")}>
                  Una vez aprobado sigue los pasos en el chat y listo!{" "}
                </p>
              </Col>

              <Col xs={12} className="pt-5 pb-2">
                <Row className={`pb-5 `}>
                  <Col
                    xs={device.device.type === "desktop" ? 0 : 12}
                    className="pt-2 pb-2 text-center"
                  >
                    <Col xs={12}>
                      <img
                        src={`${pass_1}`}
                        className="img img-fluid"
                        style={{ height: "45px" }}
                      />
                    </Col>
                    <Col xs={12} className="pt-2">
                      <p
                        className="font-weight-bold"
                        style={label_(1, 0, "18px")}
                      >
                        Elige tu préstamo ideal
                      </p>
                      <p
                        className="font-weight-normal"
                        style={label_(1, 0, "16px")}
                      >
                        <label className="col-10">
                          Tu decides el monto y el plazo: aprobamos en minutos.
                        </label>
                      </p>
                    </Col>
                  </Col>
                  <Col
                    xs={device.device.type === "desktop" ? 0 : 12}
                    className="pt-2 pb-2 text-center"
                  >
                    <Col xs={12}>
                      <img
                        src={`${pass_2}`}
                        className="img img-fluid"
                        style={{ height: "45px" }}
                      />
                    </Col>
                    <Col xs={12} className="pt-2">
                      <p
                        className="font-weight-bold"
                        style={label_(1, 0, "18px")}
                      >
                        Ingresa tus Datos
                      </p>
                      <p
                        className="font-weight-normal"
                        style={label_(1, 0, "16px")}
                      >
                        <label className="col-10">
                          Ingresa tu número de cédula y tu número telefónico
                        </label>
                      </p>
                    </Col>
                  </Col>
                  <Col
                    xs={device.device.type === "desktop" ? 0 : 12}
                    className="pt-2 pb-2 text-center"
                  >
                    <Col xs={12}>
                      <img
                        src={`${pass_3}`}
                        className="img img-fluid"
                        style={{ height: "45px" }}
                      />
                    </Col>
                    <Col xs={12} className="pt-2">
                      <p
                        className="font-weight-bold"
                        style={label_(1, 0, "18px")}
                      >
                        Recibe el dinero en 24hs.
                      </p>
                      <p
                        className="font-weight-normal"
                        style={label_(1, 0, "16px")}
                      >
                        <label className="col-10">
                          Depositamos el dinero en tu cuenta en menos de 24
                          horas.
                        </label>
                      </p>
                    </Col>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row id="youtubeVideo" className="pt-3">
              <Col xs={12} className="mb-4 text-center d-none d-md-block">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/ys3fqp4n92A"
                  width="640"
                  height="360"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Col>
              <Col xs={12} className="mb-4 text-center d-block d-md-none">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/ys3fqp4n92A"
                  width="328px"
                  height="185px"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    )
  }
}
