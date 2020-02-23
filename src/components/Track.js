import React from "react"
import styled from "styled-components"

export default function Track({ imgsource, altimg, title, content }) {
  return (
    <Container>
      <Logo src={imgsource} alt={altimg}></Logo>
      <Content>
        <h3>{title}</h3>
        <p>{content}</p>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  h3 {
    font-family: sans-serif;
    color: #3e3c55;
  }
  p {
    font-family: sans-serif;
    text-align: center;
    max-width: 80%;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
      text-align: center;
    }
  }
`
const Logo = styled.img`
  max-width: 100%;
  max-height: 80px;
`

const Content = styled.div``
