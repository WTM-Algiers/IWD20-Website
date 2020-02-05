import React from "react"
import styled from "styled-components"

export default function ContactInfo({ contact }) {
  return (
    <Container>
      <Icon src={contact.icon}></Icon>
      <Content>
        <h5>{contact.main}</h5>
        <h6>{contact.snd}</h6>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2% 0;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`
const Content = styled.div`
  h5,
  h6 {
    margin: 2%;
    font-weight: 500;
    opacity: 0.8;
  }
  h6 {
    opacity: 0.6;
  }
  min-width: 80%;
  width: fit-content;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 2%;
  @media screen and (max-width: 768px) {
    justify-content: center;
    width: 90%;
  }
`
const Icon = styled.img`
  width: 20%;
  max-width: 50px;
  margin: 0 3%;
`
