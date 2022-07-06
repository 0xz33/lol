import React from 'react';
import styled from 'styled-components';
import { Orbs } from '..';

export const Header = (props) => {
  return (
    <>
      <Heading>
        <OrbWrapper>
          {[...Array(6)].map((el, index) => (
            <OrbHorizWrapper>
              <Orbs
                key={index}
                height='160px'
                width='50vw'
                margin='-55px -20vw'
              />
            </OrbHorizWrapper>
          ))}
        </OrbWrapper>
        <PageTitle>{props.title}</PageTitle>
      </Heading>
    </>
  );
};

const Heading = styled.header`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const PageTitle = styled.h1`
  z-index: 100;
  text-align: center;
  padding: 1.11em;
  border-radius: 24px;
  max-width: clamp(100px, 90%, 560px);

  background: rgba(0, 0, 0, 0.66);
  box-shadow: 0px 0px 70px rgba(0, 0, 0, 1);
  backdrop-filter: blur(30px);
`;

const OrbWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
`;
const OrbHorizWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
