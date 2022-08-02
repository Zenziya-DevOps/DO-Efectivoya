import React from "react";
import styled from "styled-components";
import { colors } from "../../../../styles/colors";
import { label_ } from "../../../../styles/leters";
// import pf from "../../../../images/pf.svg"
// import cc from "../../../../images/cc.svg"
// import cp from "../../../../images/cp.svg"
// import rq from "../../../../images/rq.svg"
import NavbarItem from "../../../onboarding/Navbar/NavItems/NavbarItem";
import config from "../../../onboarding/Navbar/NavItems/config.json";
import whatsapp from '../../../../images/whatsapp-white.svg'

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: start;
  width: 30px;
  height: 20px;
  position: relative;
  z-index: 102;
  list-style: none;
  display: relative;
  flex-flow: row nowrap;
  overflow: hidden;
  li {
    padding: 18px 10px;
  }
  flex-flow: column nowrap;
  background-color: ${colors[0]};
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  top: 0;
  right: 0;
  height: 105vh;
  width: 100%;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
  li {
    color: #fff;
    font-size: 24px;
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      {config.navlinks.map(({ label, route }, index) => (
        <NavbarItem key={index} name={label} route={route} />
      ))}
      <button className="btn mt-3 py-2 px-5 fs-25 btn-outline-light d-flex nohover">
        <img className="mr-4" width={"30px"} src={`${whatsapp}`} alt="" />
        Ayuda
      </button>
      {/* <a></a>
      <div>
      <li>
        <a style={label_(3, 0)} href="#Ayuda">
          <img src={`${pf}`} className="pr-3 img img-fluid" />
          Preguntas frecuentes
        </a>
      </li>

      <li>
        <a style={label_(3, 0)} href="#Cuota">
          <img src={`${cc}`} className="pr-3 img img-fluid" />
          Pagar cuota
        </a>
      </li>

      <li>
        <a style={label_(3, 0)} href="#Quienes">
          <img src={`${cp}`} className="pr-3 img img-fluid" />
          ¿Quienes somos?
        </a>
      </li>

      <li>
        <a style={label_(3, 0)} href="#Requisito">
          <img src={`${rq}`} className="pr-3 img img-fluid" />
          Requisitos
        </a>
      </li>
      </div> */}
    </Ul>
  );
};

export default RightNav;
