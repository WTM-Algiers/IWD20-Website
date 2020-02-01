import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
`
const MainWrapper = styled(Container)`
  height: auto;
  min-height: 80vh;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
export default Container
export { MainWrapper }
