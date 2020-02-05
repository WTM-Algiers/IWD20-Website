import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
`
const MainWrapper = styled(Container)`
  height: auto;
  min-height: 90vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
export default Container
export { MainWrapper }
