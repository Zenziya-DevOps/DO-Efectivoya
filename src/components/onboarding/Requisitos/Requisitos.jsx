import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { UXUIContext } from "../../../context/UxUIProvider";
import ReqCard from "./ReqCard/ReqCard";

const Requisitos = () => {

  const {device} = useContext(UXUIContext)

  return (
    <Container fluid className={`w-100 d-flex py-5 justify-content-center ${device === 'mobile' ? 'flex-column' : ''}`}>
      <ReqCard type='requirements'/>
      <ReqCard  type='about_us'/>
    </Container>
  );
};

export default Requisitos;
