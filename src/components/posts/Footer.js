import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Orbs } from '../';

export const Footer = (props) => {
  return (
    <FooterContainer>
      <LinkContainer>
        {/* <PageLink to={'/writing'}>
          {window.location.pathname === `${__dirname}writing` ? '' : 'blog'}
        </PageLink> */}
        <PageLink to={'/about'}>z33?</PageLink>
        {/* <PageLink to={'/work'}>
          {window.location.pathname === `${__dirname}work` ? '' : 'work'}
        </PageLink> */}
      </LinkContainer>

      {/* <LogoWrapper>
        <OrbWrapper>
          {[...Array(2)].map((el, index) => (
            <OrbHorizWrapper>
              <Orbs key={index} height='80px' width='45vh' margin='5px -19vh' />
            </OrbHorizWrapper>
          ))}
        </OrbWrapper>

        <h1
          style={{
            fontSize: '3.33rem',
            fontFamily: 'san-serif',
            margin: '0 auto',
            textAlign: 'center',
            lineHeight: '20vh',
            position: 'absolute',
          }}
        >
          ⊙
        </h1>
      </LogoWrapper> */}
    </FooterContainer>
  );
};

const OrbWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const OrbHorizWrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* width: 100%; */
  align-items: center;
  justify-content: center;
  margin: -2em 0;
`;
const FooterContainer = styled.div`
  height: auto;
  width: 100vw;

  z-index: -10;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LinkContainer = styled.div`
  /* width: 100%; */
  /* max-width: 640px; */
  /* height: 11vh; */
  /* padding: 0 3.33em; */

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
`;
const PageLink = styled(Link)`
  text-align: center;
  margin-bottom: 3.33em;

  will-change: transform;
  transition-duration: 0.225s;
  transition-property: all;

  &:hover {
    transform: scale(1.15);
  }
`;

const LogoWrapper = styled.div`
  position: relative;
  width: 100vw;
  /* height: 20vh; */
`;
