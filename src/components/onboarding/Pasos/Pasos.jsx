import { Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { UXUIContext } from "../../../context/UxUIProvider";
import { label_ } from "../../../styles/leters";
import "./style.css";
const Pasos = () => {
  const { device } = useContext(UXUIContext);
  return (
    <div
      style={{
        backgroundColor: "#fff",
        width: "100%",
        padding: "70px 0",
      }}
    >
      <div className="pt-3 pb-3 my-5">
        {/* <Col
            xs={device === "desktop" ? 12 : 0}
            className="pt-3 pb-1 text-center"
          >
            <label
              className="font-weight-bold"
              style={label_(12, 0, "40px", null, "136.7%")}
            >
              ¿Cómo funciona?
            </label>
          </Col> */}

        <section className="pasos_container mt-4">
          <h2 className="text-center mb-5 fs-40">¿Cómo funciona?</h2>
          <div className={ device === 'desktop' ? "pasos_wrapper_horizontal" : 'pasos_wrapper_vertical'}>
            <div className={ device === 'desktop' ? "pasos_box_horizontal" : "pasos_box_vertical"}>
              <h3 className={`fs-28 text-primary mb-3 ${device === 'mobile' ? 'mr-3' : ''}`}>1.</h3>
              <p className="text-center">
                Elige
                <span className="font-weight-bold">
                  cuánto dinero necesitas.
                </span>
              </p>
            </div>

            <div className={device === 'desktop' ? 'horizontal_line' : 'vertical_line'}></div>

            <div className={ device === 'desktop' ? "pasos_box_horizontal" : "pasos_box_vertical"}>
              <h3 className={`fs-28 text-primary mb-3 ${device === 'mobile' ? 'mr-3' : ''}`}>2.</h3>
              <p className="text-center">
                Ingresa{" "}
                <span className="font-weight-bold">
                  {" "}
                  tu número de cédula y número de celular.
                </span>
              </p>
            </div>

            <div className={device === 'desktop' ? 'horizontal_line' : 'vertical_line'}></div>

            <div className={ device === 'desktop' ? "pasos_box_horizontal" : "pasos_box_vertical"}>
              <h3 className={`fs-28 text-primary mb-3 ${device === 'mobile' ? 'mr-3' : ''}`}>3.</h3>
              <p className="text-center">
                Recibe el dinero{" "}
                <span className="font-weight-bold">
                  {" "}
                  sin hacer filas, sin pedir turnos y sin moverte de tu casa.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* <Col xs={12} className="pt-5 pb-2">
            <Container fluid style={{padding: device === 'desktop' ? '0 300px' : '0 40px'}}>
              <Row className={`pb-5`}>
                <Col
                  xs={device === "desktop" ? 0 : 12}
                  className="pt-2 pb-2 text-center"
                >
                  <Row>
                  <Col xs={6} lg={12}>
                    <Typography
                      className="text-primary"
                      style={label_(12, 0, "30px")}
                    >
                      1.
                    </Typography>
                  </Col>
                  <Col xs={6} lg={12} className="pt-2">
                    <p className="" style={label_(12, 0, "18px")}>
                      Elige{" "}
                      <span className="font-weight-bold">
                        cuánto dinero necesitas.
                      </span>
                    </p>
                  </Col>
                  </Row>
                </Col>
                <Col>
                  <div className={device === 'desktop' ? "horizontal_line" : "vertical_line"}></div>
                </Col>
                <Col
                  xs={device === "desktop" ? 0 : 12}
                  className="pt-2 pb-2 text-center"
                >
                  <Col xs={12}>
                    <Typography
                      className="text-primary"
                      style={label_(12, 0, "30px")}
                    >
                      2.
                    </Typography>
                  </Col>
                  <Col xs={12} className="pt-2">
                    <p className="" style={label_(12, 0, "18px")}>
                      Ingresa{" "}
                      <span className="font-weight-bold">
                        {" "}
                        tu número de cédula y número de celular.
                      </span>
                    </p>
                  </Col>
                </Col>
                <Col>
                  <div className={device === 'desktop' ? "horizontal_line" : "vertical_line"}></div>
                </Col>
                <Col
                  xs={device === "desktop" ? 0 : 12}
                  className="pt-2 pb-2 text-center"
                >
                  <Col xs={12}>
                    <Typography
                      className="text-primary"
                      style={label_(12, 0, "30px")}
                    >
                      3.
                    </Typography>
                  </Col>
                  <Col xs={12} className="pt-2">
                    <p className="" style={label_(12, 0, "18px")}>
                      Recibe el dinero{" "}
                      <span className="font-weight-bold">
                        {" "}
                        sin hacer filas, sin pedir turnos y sin moverte de tu
                        casa.
                      </span>
                    </p>
                  </Col>
                </Col>
              </Row>
            </Container>
          </Col> */}
      </div>
    </div>
  );
};

export default Pasos;
