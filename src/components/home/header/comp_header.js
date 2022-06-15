import React, { Component } from "react"
import { Row, Container, Col } from "react-bootstrap"
import { label_ } from "../../../styles/leters"
import { COMPCalculadoras } from "../../../components/calculadora/comp_calculadora"
import { device } from "../../../model/device"
import Burger from "./Nav/Burger"
import { Youtube } from "react-bootstrap-icons"
import * as constant from "../../../constants"
import imagenCarrousel from "./../../../images/EFECTIVO-YO-700png.png"
import bk_0 from "../../../images/bk_0.svg"
import ico from "../../../images/ico.svg"

export class COMP_Header extends Component {
  render() {
    return (
      <>
        <div
          style={{
            backgroundImage: `url(${bk_0})`,
            backgroundSize: "cover ",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            height: device.device.type === "desktop" ? "750px" : "1200px",
          }}
        >
          <Container fluid>
            <Row className="p-3 my-auto mb-4 rounded">
              <Col className="p-2">
                <img src={`${ico}`} style={{ width: "195px" }} />
              </Col>

              <Col xs={1} className="my-auto ml-auto">
                <Burger />
              </Col>
            </Row>

            <Row className="pt-1">
              {device.device.type === "desktop" ? (
                <>
                  <Col xs={12} sm={4} className="my-auto">
                    <img
                      src={imagenCarrousel}
                      className="p-3 my-auto img img-fluid"
                    />
                  </Col>

                  <Col xs={12} sm={4} className="my-auto text-center">
                    <label
                      className="font-weight-bold"
                      style={label_(3, 0, "2.2em")}
                    >
                      ¡Pide un préstamo y recibe el dinero hoy mismo!
                    </label>
                    <label style={label_(3, 0, "1em")}>
                      <label className="mt-1 mb-0">
                        ¡Obtén hasta RD$ 30,000!
                      </label>
                      <label className="mb-0">
                        Aprobación inmediata, sin papeleo,
                      </label>
                      <label className="mb-0">
                        sólo con tu cédula y 100% online!
                      </label>
                    </label>
                    <label>
                      <a style={{ color: "#fff" }} href="#youtubeVideo">
                        <Youtube /> Ver cómo funciona
                      </a>
                    </label>
                  </Col>

                  <Col xs={4} className="my-auto">
                    <COMPCalculadoras />
                  </Col>
                </>
              ) : (
                <>
                  <Col xs={12} className="my-auto text-center pt-3 pb-3">
                    <label style={label_(3, 0, "25px")}>
                      <b>¡Pide un préstamo y recibe el dinero hoy mismo!</b>
                    </label>
                  </Col>

                  <Col xs={12}>
                    <COMPCalculadoras />
                  </Col>

                  <Col xs={12} className="my-auto text-center pt-3 white fs-22">
                    <p className="mt-1 mb-0">Te aprobamos al instante</p>
                    <p className="mb-0">y sin papeleo</p>
                    <p className="">¡Todo 100% online!</p>
                    <p className="mb-0">
                      <a style={{ color: "#fff" }} href="#youtubeVideo">
                        <Youtube /> Ver cómo funciona
                      </a>
                    </p>
                  </Col>

                  <Col xs={12} sm={4} className="my-auto text-center">
                    <img
                      src={imagenCarrousel}
                      className="my-auto img img-fluid"
                    />
                  </Col>
                </>
              )}
            </Row>
          </Container>
        </div>
      </>
    )
  }
}
