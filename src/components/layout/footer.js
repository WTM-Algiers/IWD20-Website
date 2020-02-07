import React, { useState } from "react"
import styled from "styled-components"
import SocialMedia from "../SocialMedia"
import send from "../../images/icons/next.svg"
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
    alert("Thank you for registering this email " + state.email)
  }
  return (
    <StyledFooter>
      <Container>
        <Title>About Us</Title>
        <p>Some details about WTM </p>
        <p>Some details about GDG</p>
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
        <form name="newsletter" method="POST" onSubmit={handleSubmit}>
          <Input>
            <input
              name="email"
              type="email"
              placeholder="example@example.com"
              onChange={handleChange}
            ></input>
          </Input>
          <SendBtn type="submit">
            <img src={send} alt="send"></img>
          </SendBtn>
        </form>
      </Container>
      <Container>
        <Title>Social Media</Title>
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
  padding: 20px 0;
  background-image: linear-gradient(
    to right top,
    #051937,
    #17213f,
    #252a46,
    #32334e,
    #3f3d56
  );
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
  form {
    display: inline;
    @media screen and (max-width: 768px) {
      text-align: center;
      width: 70%;
      margin: 5% 0;
    }
  }
`
const Title = styled.h2`
  font-family: sans-serif;
  color: white;
  font-weight: bold;
`

const Input = styled.div`
  display: inline-block;
  input {
    width: 100%;
    height: 50%;
    border: 2px solid #2bc9b4;
    font-family: sans-serif;
    padding: 10px;
    border-top-left-radius: 5px;
    border-right-color: transparent;
    border-bottom-left-radius: 5px;
  }
  @media screen and (max-width: 768px) {
    margin: auto;
    width: 70%;
  }
`
const SendBtn = styled.button`
  width: 20%;
  color: white;
  background: #584ffa;
  height: 50%;
  border: 0px solid rgb(83, 144, 245);
  padding: 10px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  img {
    width: 10px;
    margin: auto;
  }
`
