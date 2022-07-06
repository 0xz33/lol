import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Nav } from '../components';

import hooman from '../images/hooman.png';

const About = () => (
  <>
    <Nav />
    <ContentContainer>
      <HoomanContainer />

      <Hero>
        <Text>
          <h4>Just another form</h4>
        </Text>
        {/* <TruthText>
          I'm a designer at{' '}
          <ExternalLink href='https://windranger.io'>Windranger</ExternalLink>{' '}
          supporting{' '}
          <ExternalLink href='https://bitdao.io'>BitDAO </ExternalLink>
          &amp; other autonomous entities.
        </TruthText> */}
        {/* <TruthText>
          I believe there's always more than meets the
          eye.
          <br />
          <br />
          Truth is hard to find, but it's the only thing that matters.
        </TruthText> */}
      </Hero>
    </ContentContainer>
  </>
);
export default About;

const ContentContainer = styled.section`
  height: auto;
`;

const Hero = styled.header`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  gap: 3em;
  @media (max-width: 640px) {
    flex-flow: column;
    width: 80vw;
    margin: 0 auto;
  }
`;

const Text = styled.div``;
const ExternalLink = styled(Link)`
  color: #cacaca;

  will-change: transform;
  transition-duration: 0.333s;
  transition-property: all;

  &:hover {
    color: black;
    transform: scale(2);
  }
`;
const TruthText = styled.p`
  text-align: center;
  width: 90%;
  max-width: 400px;
  margin: 0 auto;
`;
const ImageContainer = styled.div`
  /* flex: 40% 0; */
  max-width: 240px;
  height: 100%;
`;
const HoomanContainer = styled.div`
  margin-top: 3em;
  /* max-width: 876px; */
  width: 100vw;
  height: 100vh;
  /* position: relative; */

  background-image: url(${hooman});
  background-size: auto 133%;
  background-repeat: no-repeat;
  background-position: center;
`;
