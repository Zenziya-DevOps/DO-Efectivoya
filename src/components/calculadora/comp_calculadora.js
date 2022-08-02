import React, { useContext, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Slider, Typography } from "@material-ui/core";
import api_efectivoya from "./../../services/api_efectivoya";
import { step } from "./../../constants";
import { getCookie } from "../../helpers";
import { Box_ } from "../../styles/Box";
import "../../css/Btt.css";
import { UXUIContext } from "../../context/UxUIProvider";

export const COMPCalculadoras = () => {
  const history = useHistory();
  const [monto, setMonto] = useState(30000);

  const { device } = useContext(UXUIContext);

  const handleChangeMonto = (event, value) => {
    setMonto(value);
  };

  const handleSubmitMonto = () => {
    api_efectivoya.interacciones({
      step: step.SUBMIT_PRIMER_MONTO,
      value: `Monto: ${monto}`,
      idCookie: getCookie(),
      url: window.location.href,
    });
    history.push("/ingreso_cedula/" + monto);
  };

  return (
    <>
      <div style={Box_(3, null, device !== 'mobile' ?"450px" : '100%')} className="p-3 mb-2 shadow-sm">
        <div id="e">
          <Container fluid>
            <Row>
              {device !== 'desktop' && (
              <Col className="col-12" xs={12}>
                <Typography
                  style={{lineHeight:'1.5',fontSize:'30px'}}
                  variant="h5"
                  className="my-3 text-dark px-3"
                >
                  ¡Hola!
                  <span className="ml-2 mr-3 font-font-weight-bold " style={{ color: "#29b6f6" }}>
                    Te prestamos hasta RD $30.000
                  </span>
                  y los recibes hoy mismo
                </Typography>
              </Col>
              )}
              <Col className="pt-1 text-center" xs={12}>
                <p className="fs-22 py-4 text-primary">¿Cuánto necesitas?</p>

                <div className="d-flex justify-content-center text-primary">
                  <span className="fs-22 mx-1">RD$</span>
                  <Typography variant="h2">
                    {monto.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  </Typography>
                </div>

                <Slider
                  size="medium"
                  value={monto}
                  step={1000}
                  min={5000}
                  max={30000}
                  onChange={handleChangeMonto}
                  className="mb-4 text-primary"
                />

                <Button
                  className="btn-block btn-primary p-3"
                  onClick={handleSubmitMonto}
                >
                  Empezar
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};
