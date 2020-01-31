import React from "react"
import NavBar from "./navbar"
import styled from "styled-components"
import { Link } from "gatsby"
//TODO : Add navigation bar with iwd logo , and links to other pages // *
// * Add Pages are : (Home About Contact Us Agenda Register )in this order
// * Add styles to styles folder
const Header = () => (
  <StyledHeader>
    <Link to="/">
      <StyledLogo src={require("../../images/iwd.png")}></StyledLogo>{" "}
    </Link>
    <h1>International Women's Day 2020</h1>
    <NavBar></NavBar>
  </StyledHeader>
)
const StyledHeader = styled.header`
  display: flex;
  height: 10vh;
  width: 100%;
  position: absolute;
  justify-content: flex-start;
  background-color: #eeeff1;

  align-items: center;
  box-shadow: 2px 7px 17px -10px rgba(229, 128, 175, 0.5);
  z-index: 999;
  h1 {
    margin-bottom: 0;
    margin-left: 1%;
    font-family: Roboto;
    font-size: 150%;
    color: rgba(133, 8, 133, 0.5);
    font-weight: 500;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`
const StyledLogo = styled.img`
  position: relative;
  top: 1vh;
  width: 8vh;
  margin-left: 1vh;
  margin-bottom: 1vh;
`

export default Header
