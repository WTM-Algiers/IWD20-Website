import React, { useState } from "react"
import { Link } from "gatsby"
import "../../styles/navbar.css"
export default function navbar() {
  const links = [
    <Link to="/">Home</Link>,
    <Link to="/about">About</Link>,
    <Link to="/agenda">Agenda</Link>,
    <Link to="/contact">Contact Us</Link>,
    <Link to="/register">Register</Link>,
  ]
  return <></>
}
