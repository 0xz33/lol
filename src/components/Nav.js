import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../style';
import { useStaticQuery, navigate, graphql, Link as GatsbyLink } from 'gatsby';
import { window } from 'browser-monads';
import { colors } from '../style';

export const Nav = (props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyle />
      <NavContainer>
        {/* <BackButton onClick={() => navigate(-1)}>«</BackButton> */}
        <HomeLink to='/'>
          {window.location.pathname === __dirname ? '' : '🌞'}
        </HomeLink>
        {/* <RouteLink to='/about'>
          {window.location.pathname === __dirname + 'about' ? '' : 'about'}
        </RouteLink> */}
      </NavContainer>
    </>
  );
};

const NavContainer = styled.nav`
  min-width: 100vw;
  height: 80px;
  display: grid;
  align-items: center;
  grid-template-columns: 10% 1fr 10%;
  position: fixed;
  padding: 0 3.333em;
  z-index: 1000;
`;

const BackButton = styled.div`
  font-family: serif;
  font-size: 2.22rem;
  border-radius: 1000px;
  color: ${colors.dark.text};
  background-color: ${colors.dark.background};
  cursor: pointer;
  grid-column: 1;
  margin: auto;

  will-change: transform;
  transition-duration: 0.333s;
  transition-property: all;

  &:hover {
    transform: scale(1.15);
  }
`;

const HomeLink = styled(GatsbyLink)`
  font-weight: 700;
  font-size: 2rem;

  will-change: transform;
  transition-duration: 0.555s;
  transition-property: all;
  grid-column: 2;
  margin: auto;

  &:hover {
    transform: scale(1.15) rotate(-180deg);
  }
`;
const RouteLink = styled(GatsbyLink)`
  font-size: 1em;
  font-weight: 500;

  will-change: transform;
  transition-duration: 0.225s;
  transition-property: all;

  &:hover {
    transform: scale(1.15);
  }
`;
