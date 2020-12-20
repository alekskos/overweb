import * as React from "react"
import styled from 'styled-components'
import {GlobalStyles} from '../globalStyles'

// styles
const Main = styled.main`
  display: grid;
`;

const Header = styled.h1`

`

// markup
const IndexPage = () => {
  return (
    <>
    <GlobalStyles />
    <Main>
      <Header>АБВГДЕ</Header>
    <p>Lorem iwpsum dolor sit amet, consectetur adipisicing elit. Architecto blanditiis cupiditate dolorem eveniet iste laboriosam minima minus officiis optio perferendis quam quis quo rem repellendus, sequi totam vel velit voluptatum.</p>
    </Main>
      </>
  )
}

export default IndexPage
