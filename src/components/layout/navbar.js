import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
const links = [
  <Link to="/">Home</Link>,
  <Link to="/about">About</Link>,
  <Link to="/agenda">Agenda</Link>,
  <Link to="/contact">Contact Us</Link>,
  <Link to="/register">Register</Link>,
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
  @media screen and (max-width: 768px) {
    width: 80%;
    margin-right: 10px;
  }
  a {
    text-decoration: none;
    font-size: 1rem;
    color: rgb(10, 10, 10);
    opacity: 0.5;
    &:hover {
      opacity: 0.75;
      color: #e580af;
    }
  }
`
