import React from "react"
import styled from "styled-components"
// TODO : ADD about us
// TODO : ADD sign up to newsletter
// TODO : Add social media links
export default function footer() {
  return (
    <StyledFooter>
      <FooterContainer>
        <Copyrights>All Rights reserved to WTM Algier 2020</Copyrights>
      </FooterContainer>
    </StyledFooter>
  )
}
//* Styled Components
const FooterContainer = styled.div`
  text-align: center;
  height: 100%;
`
const Copyrights = styled.p`
  font-family: sans-serif;
  font-size: 1rem;
  color: white;
  text-align: center;
  margin: 0;
`
const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  min-height: 10vh;
  background-color: rgba(229, 128, 175, 1);
`
