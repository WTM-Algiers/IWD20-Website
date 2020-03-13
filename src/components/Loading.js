import React from "react"
import styled from "styled-components"
import spinner from "../images/loading.gif"
export default function Loading() {
  return (
    <Loader>
      <img src={spinner} alt="loading..."></img>
    </Loader>
  )
}

const Loader = styled.div``
