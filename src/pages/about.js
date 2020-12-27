import React from 'react';
import styled from 'styled-components';

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
        <Main>
            <Header>About</Header>
        </Main>
    );
}