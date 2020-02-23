import React, { useState } from "react"
import styled from "styled-components"
import SocialMedia from "../SocialMedia"
import send from "../../images/icons/next.svg"
import theme from "../../constants/theme.json"
import { encode } from "../ContactFrom"
export default function Footer() {
  const [state, setState] = useState({})

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => SavedEmail())
      .catch(error => alert(error))
  }
  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  const SavedEmail = () => {
    alert("Thank you for registering this email 😉" + state.email)
  }
  return (
    <StyledFooter>
      <Container>
        <Title>About Us</Title>
        <p>
          WTM Algiers is a community that aims to inspire and enable more women
          to join the tech industry.{" "}
        </p>
        <p>In partnership with GDG Algiers</p>
        <Copyrights>
          This website was built with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          from WTM Algiers team Ⓒ2020{" "}
        </Copyrights>
      </Container>
      <Container>
        <Title>Newsletter</Title>
        <p>
          Stay up to date with our latest trends{" "}
          <span role="img" aria-label="email">
            📧
          </span>
        </p>
        <form
          name="newsletter"
          method="POST"
          onSubmit={handleSubmit}
          data-netlify={true}
        >
          <Input>
            <input
              name="email"
              type="email"
              placeholder="example@example.com"
              onChange={handleChange}
            ></input>
            <SendBtn type="submit">
              <img src={send} alt="send"></img>
            </SendBtn>
          </Input>
        </form>
      </Container>
      <Container>
        <Title>Follow Us</Title>
        <p>
          Lets stay social{" "}
          <span role="img" aria-label="winky face">
            😉
          </span>
        </p>
        <SocialMedia></SocialMedia>
      </Container>
    </StyledFooter>
  )
}
//* Styled Components
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
  padding: 2% 0;
  background: ${theme.light_mode.colors.dark};

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
    color: #707070;
    margin-top: 0;
    max-width: 80%;
    margin-bottom: 1rem;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5em;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
    p {
      margin: 0 auto;
      margin-bottom: 1rem;
    }
    width: 100%;
    margin: 5% 0;
  }
  form {
    display: inline;
    @media screen and (max-width: 768px) {
      text-align: center;
      width: 70%;
      margin: 5% 0;
    }
  }
`
const Title = styled.h4`
  font-family: sans-serif;
  color: white;
  font-weight: bold;
`

const Input = styled.div`
  display: flex;
  input {
    width: 100%;
    height: 50%;
    border: 2px solid #2bc9b4;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    padding: 10px;
    border-top-left-radius: 2px;
    border-right-color: transparent;
    border-bottom-left-radius: 2px;
  }
  @media screen and (max-width: 768px) {
    margin: auto;
    width: 70%;
    max-width: 500px;
  }
`
const SendBtn = styled.button`
  width: 20%;
  color: white;
  background: ${theme.light_mode.colors.accent};
  height: 45%;
  border: 0px solid rgb(83, 144, 245);
  padding: 10px;
  cursor: pointer;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  img {
    width: 10px;
    margin: auto;
  }
  @media screen and (max-width: 768px) {
    margin: auto;
  }
`
