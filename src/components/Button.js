import styled from "styled-components"

const Button = styled.button`
  padding: 0.6rem 1.8rem;
  font-family: sans-serif;
  background-color: #6c63ff;
  color: white;
  border: 1px solid #6c63ff;
  transition: 0.5s ease-out;
  cursor: pointer;
  border-radius: 3px;
  &:focus {
    outline-color: white;
    border-color: white;
  }
  &:hover {
    background-color: #5047f8;
  }
  text-decoration: none;
`
export default Button
