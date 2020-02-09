import React from "react"
import NavBar from "./navbar"
import styled from "styled-components"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"

const Header = () => (
  <StyledHeader>
    <Link to="/">
      <StyledLogo src={logo}></StyledLogo>{" "}
    </Link>
    <h1
      style={{
        color: "#00BFA5",
        fontWeight: 400,
      }}
    >
      International Women's Day{" "}
      <span
        style={{
          color: "#584FFA",
        }}
      >
        2020
      </span>
    </h1>
    <NavBar></NavBar>
  </StyledHeader>
)
const StyledHeader = styled.header`
  display: flex;
  padding: 0px 48px;
  height: 10vh;
  width: 100%;
  position: fixed;
  justify-content: flex-start;
  background-color: rgba(253, 253, 253, 1);

  align-items: center;
  box-shadow: 2px 7px 17px -10px rgba(0, 0, 0, 0.1);
  z-index: 999;
  h1 {
    margin-bottom: 0;
    margin-left: 1%;
    font-family: "Roboto" sans-serif;
    font-size: 18pt;
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
