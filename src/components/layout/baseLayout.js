import React from "react"
import Header from "./header"
import styled from "styled-components"
const BaseLayout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <StyledMain>{children}</StyledMain>
    </>
  )
}
//* Styled Components

const StyledMain = styled.main`
  width: 100%;
  min-height: 90vh;
  padding-top: 10vh;
`
export default BaseLayout
