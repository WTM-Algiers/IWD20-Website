import styled from "styled-components"

import React from "react"

const Record = ({ record, title }) => {
  return (
    <Container>
      <h3>{record}</h3>
      <h4>{title}</h4>
    </Container>
  )
}
export default Record
const Container = styled.div`
  text-align: center;
  color: white;
  font-family: sans-serif;
  h3 {
    font-size: 32pt;
    margin-bottom: 8px;
  }
  h4{
    font-weight: 300;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 32px;
  }
`
