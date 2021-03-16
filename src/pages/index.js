// import * as React from "react";
// import { Link } from "gatsby";
// import styled from 'styled-components';
// import { GlobalStyles } from '../globalStyles';

// // styles
// const Main = styled.main`
//   display: grid;
//   margin: auto;
//   max-width: 42rem;
// `;

// const Header = styled.h1`
// `;

// // markup
// const IndexPage = () => {
//   return (
//     <>
//       <GlobalStyles />
//       <Main>
//         <Header>Over Web 🕸</Header>
//         <p>
//           Lorem iwpsum dolor sit amet, consectetur adipisicing elit.
//           Architecto blanditiis cupiditate dolorem eveniet iste laboriosam minima
//           minus officiis optio perferendis quam quis quo rem repellendus, sequi totam vel velit voluptatum.
//         </p>
//         <Link to="/about">About</Link>
//       </Main>
//     </>
//   )
// };

// export default IndexPage;

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby blog with Markdown pages.</p>
    <p>
      <Link to="/blog/my-first-post/">Go to my first Markdown blog post</Link>
      <br />
      <Link to="/blog/my-second-post/">Go to my second Markdown blog post</Link>
    </p>
  </Layout>
)

export default IndexPage