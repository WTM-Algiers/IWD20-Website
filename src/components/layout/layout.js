/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import BaseLayout from "./baseLayout"
import Footer from "./fotter"
import "../../styles/layout.css"
const Layout = ({ children }) => {
  return (
    <>
      <BaseLayout>{children}</BaseLayout>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
