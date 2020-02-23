import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import commonStyle from "../../styles/common.module.css"
import theme from "../../constants/theme.json"
const links = [
  <Link to="/" activeClassName={commonStyle.linkActive} rel="noopener">
    Home
  </Link>,
  <Link to="/about" activeClassName={commonStyle.linkActive} rel="noopener">
    About
  </Link>,
  <Link to="/agenda" activeClassName={commonStyle.linkActive} rel="noopener">
    Agenda
  </Link>,
  <Link to="/contact" activeClassName={commonStyle.linkActive} rel="noopener">
    Contact Us
  </Link>,
  <Link
    to="/register/iwd"
    className="register"
    rel="noopener"
    activeClassName={commonStyle.registerActive}
  >
    Register
  </Link>,
  <Link
    to="/register/ideathon"
    className="register"
    rel="noopener"
    activeClassName={commonStyle.registerActive}
  >
    Ideathon
  </Link>,
]
export default function Navbar() {
  //const [menuOpened, setOpened] = React.useState(true)
  return <StyledNavbar>{links}</StyledNavbar>
}

/// Mobile Navigation :
// const Menu = styled.div`
//   height: 100vh;
//   width: 100%;
//   overflow-y: hidden;
//   position: absolute;
//   top: 0;
//   left: 0;
//   background: white;
//   z-index: 99;
// `
const StyledNavbar = styled.nav`
  display: flex;
  margin-left: auto;
  width: 40%;
  justify-content: space-around;
  align-items: center;
  font-family: sans-serif;

  a {
    text-decoration: none;
    font-size: 16px;
    color: #3f3d56;
    opacity: 0.8;
    transition: 0.1s ease-in;
    &:hover {
      opacity: 0.9;
      color: ${theme.light_mode.colors.primary};
      &.register {
        color: white;
        background-image: linear-gradient(
          to right top,
          #1ce9b6,
          #00d8db,
          #00c2fa,
          #00a7ff,
          #4285f4
        );
        padding: 10px 20px;
        border-radius: 5px;
        border-bottom: none;
      }
    }
    @media screen and (max-width: 768px) {
      font-size: 0.7rem;
    }
  }
  @media screen and (max-width: 768px) {
    width: 80%;
    margin-right: 10px;
  }
`
