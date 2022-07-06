import React from 'react';
import styled from 'styled-components';
import { MDXProvider } from '@mdx-js/react';
import { GlobalStyle } from '../style';
import { Nav, Header, Footer } from '../components';

const PostLayout = (props) => {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Header title={props.title} />
      <MDXProvider>
        <Container>
          <main>{props.children}</main>
        </Container>
      </MDXProvider>
    </>
  );
};

export default PostLayout;

const Container = styled.div`
  width: 90%;
  max-width: 640px;
  margin: auto;

  h1,
  h2,
  h3,
  h4 {
    margin-bottom: 1em;
  }

  p {
    margin-bottom: 2em;
  }
  img {
    border-radius: 8px;
  }
  h1 {
  }
  h2 {
  }
  h3,
  h4,
  a {
    color: pink;
    text-decoration: underline;
  }
`;
