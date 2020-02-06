import styled, { css } from "styled-components"
import React from "react"
import send from "../images/icons/send.svg"
import Button from "./Button"
const ContactForm = () => {
  return (
    <Form name="contact" method="POST" data-netlify={true}>
      <div className="inputs">
        <div className="form-group">
          <Label for="fname">First Name</Label>
          <Input name="fname" type="text" placeholder="ex: Mohammad"></Input>
        </div>
        <div className="form-group">
          <Label for="lname">Last Name</Label>
          <Input name="lname" type="text" placeholder="ex: Habib"></Input>
        </div>
        <div className="form-group">
          <Label for="email">Your email</Label>
          <Input
            name="email"
            type="email"
            placeholder="ex: mohammad@wtm.dz "
          ></Input>
        </div>
      </div>
      <TextArea placeholder="Your beautiful message..."></TextArea>
      <CustomButton
        type="submit"
        onClick={e => {
          e.preventDefault()
          alert("Thank you for sending 😄")
        }}
      >
        <div class="ctn-btn">
          <span>Send</span>
          <img src={send} alt="send icon" />
        </div>
      </CustomButton>
    </Form>
  )
}
const Form = styled.form`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 10%;
  font-family: sans-serif;
  color: rgba(63, 61, 86, 0.8);
  button {
    position: absolute;
    right: 0;
    top: 100%;
  }
  .inputs {
    width: 50%;
    margin-bottom: 1%;
    font-family: inherit;
    text-align: left;
    color: inherit;
    .form-group {
      margin: 20px 0;
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    margin-left: 0;
    margin-top: 5%;
    .inputs {
      margin-bottom: 5%;
      width: 90%;
      text-align: center;
    }
    button {
      position: relative;
      margin-top: 5%;
    }
  }
`

const border = css`
  border: 2px solid #5047f8;
  border-radius: 5px;
  outline: none;
`
const transition = css`
  transition: 0.5s ease-in;
`
const hoverEffect = css`
  &:hover {
    opacity: 0.8;
    border: 2px solid #5047f8;
  }
`
const focusEffect = css`
  &:focus {
    opacity: 1;
    border: 2px solid #5047f8;
  }
`
const Label = styled.label`
  display: block;
  font-family: inherit;
`
const Input = styled.input`
  opacity : 0.6;
  padding : 10px;
  ${border}
  ${transition}
  ${hoverEffect}
  ${focusEffect}
  width: 80%;
  color: inherit;
  font-family : inherit;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`
const TextArea = styled.textarea`
  opacity : 0.6;
  width: 50%;
  height: 100%;
  min-height: 20vh;
  padding : 10px;
  font-family : inherit;
  ${border}
  ${transition}
  ${hoverEffect}
  ${focusEffect}
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`
const CustomButton = styled(Button)`
  ${transition}
  .ctn-btn {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    img {
      transition: 0.1s ease-in-out;
      margin: 0;
      margin-left: 10px;
      width: 0px;
    }
  }
  &:hover {
    .ctn-btn img {
      width: 30px;
    }
  }
`
export default ContactForm