import PropTypes from "prop-types"
import React from "react"
import NavBar from "./navbar"
//TODO : Add navigation bar with iwd logo , and links to other pages // *
// * Add Pages are : (Home About Contact Us Agenda Register )in this order
// * Add styles to styles folder
const Header = () => (
  <header>
    <h1>Hello world</h1>
    <NavBar></NavBar>
  </header>
)

Header.propTypes = {}

Header.defaultProps = {}

export default Header
