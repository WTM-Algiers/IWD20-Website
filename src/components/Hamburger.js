import React from "react"
import icon from "../images/icons/hamburger.svg"
import styled from "styled-components"
export default function Hamburger({ onClick, style }) {
  return (
    <Btn onClick={onClick} style={style}>
      <img src={icon} alt="navigation button"></img>
    </Btn>
  )
}
const Btn = styled.button`
  margin-left: auto;
  margin-right: 5vw;
  width: 10vw;
  max-width: 50px;
  img {
    width: 100%;
    margin: 0;
  }
  background: transparent;
  border: none;
  cursor: pointer;
  outline-style: none;
`
