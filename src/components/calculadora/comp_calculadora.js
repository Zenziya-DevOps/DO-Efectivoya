import React, { useState } from "react"
import { Container, Row, Col, Button, Form } from "react-bootstrap"
import { Slider } from "@material-ui/core"
import { Box_ } from "../../styles/Box"
import "../../css/Btt.css"
import { Link } from "react-router-dom"

export const COMPCalculadoras = () => {
  const [monto, setMonto] = useState(30000)

  const handleChangeMonto = (event, value) => {
    setMonto(value)
  }

  return (
    <>
      <div style={Box_(3, null, "332px")} className="p-3 mb-2 shadow-sm">
        <div id="e">
          <Container fluid>
            <Row>
              <Col className="pt-1 text-center" xs={12}>
                <p className="fs-22">¿Cuánto necesitas?</p>

                <p style={{ color: "#6C63FB" }} className="fs-40">
                  <b>
                    RD ${monto.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  </b>
                </p>

                <Slider
                  size="medium"
                  value={monto}
                  step={1000}
                  min={5000}
                  max={30000}
                  onChange={handleChangeMonto}
                  className="mb-4"
                />

                <Link to={{ pathname: `ingreso_cedula/${monto}` }}>
                  <Button className="btn-zz btn-block">Continuar</Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  )
}
