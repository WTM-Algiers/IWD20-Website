import styled from "styled-components"
import theme from "../constants/theme.json"
const Button = styled.button`
  padding: 0.6rem 1.8rem;
  font-family: sans-serif;
  background-color: ${theme.light_mode.colors.primary};
  color: white;
  border: 1px solid ${theme.light_mode.colors.primary};
  transition: 0.5s ease-out;
  cursor: pointer;
  border-radius: 3px;
  &:focus {
    outline-color: white;
    border-color: white;
  }
  &:hover {
    background-color: ${theme.light_mode.colors.primary_dark};
  }
  text-decoration: none;
`
export default Button
