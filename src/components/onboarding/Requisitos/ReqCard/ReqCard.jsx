import { Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { UXUIContext } from "../../../../context/UxUIProvider";
import file from "../../../../images/file.svg";
import users_circle from "../../../../images/users_circle.svg"
 
const ReqCard = (props) => {

    const {type} = props
    const {device} = useContext(UXUIContext)

  return (
    <>
      <Card
            style={{
              width: device !== 'mobile' ? "608px" : '90%',
              height: device !== 'mobile' ? "500px" : '300px',
              backgroundColor: "#f6f6f6",
              border: "none",
              display: "flex",
              margin:'20px 50px',
            }}
          >

    {renderCard(type)}
          </Card>
    </>
  );
};

export default ReqCard;

const renderCard = (type) => {

    switch (type) {
        case 'requirements':

        return (
            
            <Card.Body className="align-items-center d-flex fs-22">
              <div>
              <Card.Title className="pl-5">
                <img src={file} alt="icon" />
                <Typography className="mt-3  font-weight-bold fs-22">
                  Requisitos
                </Typography>
              </Card.Title>
              <ul className="mt-4">
                <li>
                  <p> Ser mayor de 18 años </p>
                </li>
                <li>
                  <p> Tener cédula dominicana </p>
                </li>
                <li>
                  <p> Tener una cuenta de banco a tu nombre </p>
                </li>
              </ul>
              </div>
            </Card.Body>
        )

        case 'about_us':
            return (

                <Card.Body className="align-items-center d-flex ">
                  <div>
                  <Card.Title className="pl-3 d-flex flex-column justify-content-around">
                      <div>
                    <img src={file} alt="icon" />
                      </div>
                    <Typography className="mt-3  font-weight-bold fs-22">
                    Quienes somos
                    </Typography>
                    <Typography variant="p" className="fs-22 mt-3">
                      Descubre cómo comenzamos, qué nos motiva y cómo reinventamos las finanzas personales en Centroamérica.
                    </Typography>
                    <Typography variant="a" className="text-primary mt-4 fs-22">
                    Conocer más sobre Efectivo Ya
                    </Typography>
                  </Card.Title>
                  </div>
                </Card.Body>
            )

    
        default:
            break;
    }


} 
