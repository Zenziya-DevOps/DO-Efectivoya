import React from "react"
import styled from "styled-components"
import { colors } from "../../../../styles/colors"
import { label_ } from "../../../../styles/leters"
import pf from "../../../../images/pf.svg"
import cc from "../../../../images/cc.svg"
import cp from "../../../../images/cp.svg"
import rq from "../../../../images/rq.svg"

const Ul = styled.ul`
  display: inline-block;
  width: 30px;
  height: 20px;
  position: relative;
  z-index: 2;

  list-style: none;
  display: relative;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: ${colors[0]};
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <a></a>

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
    </Ul>
  )
}

export default RightNav
