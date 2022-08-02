import React, { useState } from "react"
import styled from "styled-components"
import RightNav from "./RigthNav"
import { colors } from "../../../../styles/colors"

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  top: 2rem;
  z-index: 103;
  display: none;
  rigth:10px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  div {
    width: 100%;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? colors[3] : colors[3])};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(51deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "rotate(-51deg)" : "rotate(0)")};
    }
  }
`

const Burger = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} />
    </>
  )
}

export default Burger
