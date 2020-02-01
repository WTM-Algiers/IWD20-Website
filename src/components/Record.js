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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: sans-serif;
  h3 h4 {
    text-align: center;
    margin-bottom: 10px;
  }
`
