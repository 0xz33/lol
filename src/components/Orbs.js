import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { colors } from '../style';

export const Orbs = (props) => {
  const colorArray = Object.values(colors.chakra);
  return (
    <OrbContainer>
      {colorArray.map((color) => {
        let randY = Math.floor(Math.random() * 10 + 3) + 'px';
        let randDelay = Math.floor(Math.random() * 1.618) + 's';
        let randTime = Math.floor(Math.random() * 3 + 3.5) + 's';
        let randOpacity = Math.floor(Math.random() * 0.15 + 0.2);
        return (
          <Orb
            key={color}
            color={color}
            randY={randY}
            randDelay={randDelay}
            randTime={randTime}
            randOpacity={randOpacity}
            height={props.height}
            width={props.width}
            margin={props.margin}
          />
        );
      })}
    </OrbContainer>
  );
};

const OrbContainer = styled.div`
  display: flex;
  flex-flow: row;
`;

const orbFloat = (randY) => keyframes`
  0% {
    transform: translateY(0);
    opacity:1;
  }
  50% {
    transform: translateY(clamp(1px,${randY},100px));
    opacity:.05;
  }

  100% {
    transform: translateY(0);
    opacity:1;
  }
`;

const Orb = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  /* margin: 0 -20vh; */
  /* height: 10vh; */
  /* width: 10vh; */
  /* margin: 0 -3vh; */

  animation-name: ${(props) => orbFloat(props.randY)};
  animation-duration: ${(props) => props.randTime};
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-delay: ${(props) => props.randDelay};

  background: ${(
    props
  ) => `radial-gradient(50% 50% at 50% 50%, ${props.color}90 0%,
     ${props.color}95 2%,
     ${props.color}40 35%,
     ${props.color}15 65%,
          ${props.color}00 100%);
  `};
  filter: ${(props) => `drop-shadow(0px 0px 20px ${props.color})`};
  filter: ${(props) => `drop-shadow(0px 0px 30px ${props.color})`};
  filter: blur(13px);
`;

// works
// background: ${(props) => `radial-gradient(
//   50% 50% at 50% 50%,
//   ${props.color} 0%,
//   rgba(11, 7, 15, 0) 100%);
// `};

// const Orb = styled.div.attrs((props) => ({
//   style: {
//     height: props.height,
//     width: props.width,
//     margin: props.margin,
//     animationName: orbFloat(props.randY),
//     animationDuration: props.randTime,
//     animationDelay: props.randDelay,
//   }`
//   background:red;
//   animation-iteration-count: infinite;
//   animation-timing-function: ease-in-out;
//   filter: blur(13px);`,
// }));
// const Orb = styled.div.attrs((props) => ({
//   style: {
//     height: props.height,
//     width: props.width,
//     margin: props.margin,
//     animationName: orbFloat(props.randY),
//     animationDuration: props.randTime,
//     animationDelay: props.randDelay,
//     background: `radial-gradient(50% 50% at 50% 50%, ${props.color} + 90 0%,
//       ${props.color}95 2%,
//       ${props.color}40 35%,
//       ${props.color}15 65%,
//       ${props.color}00 100%)
//    `,
//     filter: `drop-shadow(0px 0px 20px ${props.color})`,
//     filter: `drop-shadow(0px 0px 30px ${props.color})`,
//   }`
//   animation-iteration-count: infinite;
//   animation-timing-function: ease-in-out;
//   filter: blur(13px);`,
// }));
