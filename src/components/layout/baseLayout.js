import React from "react"
import Header from "./header"
const BaseLayout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
    </>
  )
}
//* Styled Components

export default BaseLayout
