import { Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { UXUIContext } from "../../context/UxUIProvider";
import { COMPCalculadoras } from "../calculadora/comp_calculadora";
import { COMP_Footer } from "../home/footer/comp_footer";
import Asosiacion from "./Asosiacion/Asosiacion";
import Faqs from "./Faqs/Faqs";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Pasos from "./Pasos/Pasos";
import Requisitos from "./Requisitos/Requisitos";
import Testimonios from "./Testimonios/Testimonios";

const OnBoard = () => {
  return (
    <>
      <div style={{ background: "#000064",}}>
        <Header/>
        <Pasos/>
      </div>
      <Requisitos/>
            <Faqs/>
            <Testimonios/>
            <Asosiacion/>
            <Footer/>
            {/* <COMP_Footer /> */}
    </>
  );
};

export default OnBoard;
