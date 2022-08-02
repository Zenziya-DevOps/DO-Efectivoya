import { UXUIContext } from "../../../context/UxUIProvider";
import { Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { COMPCalculadoras } from "../../calculadora/comp_calculadora";
import Navbar from "../Navbar/Navbar";


const Header = () => {
    const { device } = useContext(UXUIContext);
    return (
      <>
        <div style={{ background: "#000064",}}>
          <Navbar />
          <Container fluid className="py-5 d-flex justify-content-center">
            <div  className="w-75" style={{paddingBottom:'200px' }} >
            <Row className="px-5 align-items-center">
              {device !== "mobile" && (
                <Col xs={12} lg={{ span: 6 }}>
                  <Typography
                    style={{ lineHeight: "1.5" }}
                    variant="h3"
                    className="my-5 text-light lh-lg p"
                  >
                    ¡Hola!
                    <span className="ml-2 mr-3 " style={{ color: "#29b6f6" }}>
                      Te prestamos hasta RD $30.000
                    </span>
                    y los recibes hoy mismo
                  </Typography>
  
                  <li
                    style={{ listStyle: "none" }}
                    className="fs-32 text-light mb-2"
                  >
                    ✓ Solicitud 100% online
                  </li>
                  <li
                    style={{ listStyle: "none" }}
                    className="fs-32 text-light mb-2"
                  >
                    ✓ Respuesta inmediata
                  </li>
                  <li
                    style={{ listStyle: "none" }}
                    className="fs-32 text-light mb-2"
                  >
                    ✓ Seguro y transparente
                  </li>
                </Col>
              )}
              <Col xs={12} lg={device === 'mobile' ? 12 : { span: 4, offset: 1 }}>
                <COMPCalculadoras />
              </Col>
              {device !== "desktop" && (
                <Col xs={{span:10,offset:2}}>
                  <li
                    style={{ listStyle: "none" }}
                    className={`${device === 'desktop' ? 'fs-32' : 'fs-22' } text-light mb-2 mt-5`}
                  >
                    ✓ Solicitud 100% online
                  </li>
                  <li
                    style={{ listStyle: "none" }}
                    className={`${device === 'desktop' ? 'fs-32' : 'fs-22' } text-light mb-2 mt-5`}
                  >
                    ✓ Respuesta inmediata
                  </li>
                  <li
                    style={{ listStyle: "none" }}
                    className={`${device === 'desktop' ? 'fs-32' : 'fs-22' } text-light mb-2 mt-5`}
                  >
                    ✓ Seguro y transparente
                  </li>
                </Col>
              )}
            </Row>
            </div>
          </Container>
        </div>
      </>
    );
  };
  
  export default Header;
  