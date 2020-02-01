import styled from "styled-components"

const Button = styled.button`
  padding: 1rem 2rem;
  font-family: sans-serif;
  background-color: #6c63ff;
  color: white;
  border: 1px solid #6c63ff;
  transition: 0.5s ease-out;
  border-radius: 3px;
  &:focus {
    outline-color: rgba(29, 233, 182, 1);
    border-color: white;
  }
  &:hover {
    background-color: #5047f8;
  }
  text-decoration: none;
`
export default Button
