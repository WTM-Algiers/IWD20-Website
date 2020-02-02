import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import commonStyle from "../../styles/common.module.css"
const links = [
  <Link to="/" activeClassName={commonStyle.linkActive}>
    Home
  </Link>,
  <Link to="/about" activeClassName={commonStyle.linkActive}>
    About
  </Link>,
  <Link to="/agenda" activeClassName={commonStyle.linkActive}>
    Agenda
  </Link>,
  <Link to="/contact" activeClassName={commonStyle.linkActive}>
    Contact Us
  </Link>,
  <Link
    to="/register"
    id="register"
    activeClassName={commonStyle.registerActive}
  >
    Register
  </Link>,
]
export default function Navbar() {
  return <StyledNavbar>{links}</StyledNavbar>
}
const StyledNavbar = styled.nav`
  display: flex;
  margin-left: auto;
  width: 50%;
  justify-content: space-around;
  align-items: center;
  font-family: sans-serif;

  a {
    text-decoration: none;
    font-size: 1rem;
    color: #3f3d56;
    opacity: 0.8;
    border-bottom: max(2px) solid transparent;
    transition: 0.1s ease-in;
    &:hover {
      opacity: 0.9;
      color: #0dc2a9;
      border-bottom: 2px solid #4285f4;
      &#register {
        color: white;
        background-color: #584ffa;
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
