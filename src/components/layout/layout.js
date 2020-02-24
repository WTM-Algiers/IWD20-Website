/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import BaseLayout from "./baseLayout"

import "../../styles/layout.css"
import Fot from "./footer"
const Layout = ({ children }) => {
  return (
    <>
      <BaseLayout>{children}</BaseLayout>
      <Fot></Fot>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
