import styled, { css } from "styled-components"
import React from "react"
import Button from "./Button"
const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}
const ContactForm = () => {
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => alert("Thank you for sending 😄"))
      .catch(error => alert(error))
  }
  return (
    <Form
      name="contact"
      method="POST"
      data-netlify={true}
      onSubmit={handleSubmit}
    >
      <div className="inputs">
        <div className="form-group">
          <Label for="name">Name</Label>
          <Input
            name="name"
            type="text"
            placeholder="ex: John Joe"
            onChange={handleChange}
            required
          ></Input>
        </div>

        <div className="form-group">
          <Label for="email">Email</Label>
          <Input
            name="email"
            type="email"
            pattern={RegExEmail}
            placeholder="example@example.com"
            required
            onChange={handleChange}
          ></Input>
        </div>

        <div className="form-group">
          <Label for="subject">Subject of message</Label>
          <Input
            name="subject"
            type="text"
            required
            placeholder="ex: WTM events"
            onChange={handleChange}
          ></Input>
        </div>
      </div>
      <TextArea
        name="message"
        placeholder="Enter Message ..."
        required
        onChange={handleChange}
      ></TextArea>
      <CustomButton type="submit"> Send Message </CustomButton>
    </Form>
  )
}
const RegExEmail =
  "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/"
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
  border: 1.7px solid #5047f8;
  border-radius: 2px;
  outline: none;
`
const transition = css`
  transition: 0.5s ease-in;
`
const hoverEffect = css`
  &:hover {
    opacity: 0.8;
    border: 1.7px solid #5047f8;
  }
`
const focusEffect = css`
  &:focus {
    opacity: 1;
    border: 1.7px solid #5047f8;
  }
`

const Label = styled.label`
  display: block;
  font-family: inherit;
`

const Input = styled.input`
  opacity : 0.6;
  padding : 10px 16px;
  ${border}
  ${transition}
  ${hoverEffect}
  ${focusEffect}
  width: 80%;
  margin-bottom: 16px;
  color: inherit;
  font-family : inherit;
  ::placeholder{
    font-size: 14px;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`
const TextArea = styled.textarea`
  opacity : 0.6;
  width: 50%;
  height: 78%;
  margin-top: -20px;
  min-height: 20vh;
  padding : 10px 16px;
  font-family : inherit;
  ${border}
  ${transition}
  ${hoverEffect}
  ${focusEffect}
  ::placeholder{
    font-size: 14px;
  }
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
  }
`
export default ContactForm
export { encode }
