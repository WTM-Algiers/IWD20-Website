import React, { useState } from "react"
import { Link } from "gatsby"
import "../../styles/navbar.css"
const links = [
  <Link to="/">Home</Link>,
  <Link to="/about">About</Link>,
  <Link to="/agenda">Agenda</Link>,
  <Link to="/contact">Contact Us</Link>,
  <Link to="/register">Register</Link>,
]
export default function navbar() {
  
  return (
    <>
      <ul
        style={{
          display: "flex",
          margin: "auto 0",
        }}
      >
        {links.map(link => (
          <li
            style={{
              marginLeft: "10%",
            }}
          >
            {link}
          </li>
        ))}
      </ul>
    </>
  )
}
export {links}