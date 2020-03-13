import React from "react"
import styled from "styled-components"
import Loading from "../components/Loading"
import LazyLoad from "react-lazyload"
export default function Track({ imgsource, altimg, title, content }) {
  return (
    <Container>
      <LazyLoad key={altimg} placeholder={<Loading></Loading>}>
        <Logo src={imgsource} alt={altimg}></Logo>
      </LazyLoad>

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
  padding: 10px;
  text-align: center;
  align-items: center;
  h3 {
    height: 40%;
    min-width: 100%;
    font-family: sans-serif;
    color: #3e3c55;
    font-size: 100%;
  }
  p {
    font-family: sans-serif;
    text-align: center;
    font-size: 100%;
    max-width: 80%;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
      text-align: center;
    }
  }
`
const Logo = styled.img`
  min-width: 80px;
  max-width: 100%;
  max-height: 80px;
`

const Content = styled.div``
