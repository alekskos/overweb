import React from 'react';
import { Link } from "gatsby";
import styled from 'styled-components';
import { GlobalStyles } from '../globalStyles';

const Main = styled.main`
  display: grid;
  margin: auto;
  max-width: 42rem;
`;

const Header = styled.h1`
    color: green;
`;

export default function About() {
  return (
    <>
      <GlobalStyles />
      <Main>
        <Header>About</Header>
        <Link to='/'>Back</Link>
      </Main>
    </>
  );
}