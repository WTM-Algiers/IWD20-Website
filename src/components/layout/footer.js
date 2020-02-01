import React from "react"
import styled from "styled-components"
import SocialMedia from "../SocialMedia"
// TODO : ADD about us
// TODO : ADD sign up to newsletter
// TODO : Add social media links
export default function footer() {
  return (
    <StyledFooter>
      <Container>
        <Title>About Us</Title>
        <p>Some details about WTM </p>
        <p>Some details about GDG</p>
        <Copyrights>
          This website was built with ❤️ from WTM Algiers team Ⓒ2020{" "}
        </Copyrights>
      </Container>
      <Container>
        <Title>Newsletter</Title>
        <p>Stay up to date with our latest trends 📧</p>
        <Input>
          <input></input>
          <SendBtn>></SendBtn>
        </Input>
      </Container>
      <Container>
        <Title>Social Media</Title>
        <p>Lets stay social 😉</p>
      </Container>
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
  color: #aaa;
  margin: 0;
`
const StyledFooter = styled.footer`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 100%;
  min-height: 10vh;
  padding: 20px 0;
  background-color: #3f3d56;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
const Container = styled.div`
  width: 33%;
  margin: 0 5%;
  p {
    font-family: sans-serif;
    color: #aaa;
    margin-bottom: 0.5rem;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
    width: 100%;
    margin: 5% 0;
  }
`
const Title = styled.h2`
  font-family: sans-serif;
  color: white;
  font-weight: bold;
`

const Input = styled.div`
  width: 70%;
  input {
    width: 80%;
    height: 50%;
    border: 2px solid #2bc9b4;
    font-family: sans-serif;
    padding: 2px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  @media screen and (max-width: 768px) {
    margin: auto;
  }
`
const SendBtn = styled.button`
  width: 20%;
  color: white;
  background: #584ffa;
  height: 50%;
  border: 0px solid rgb(83, 144, 245);
  padding: 2px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`
