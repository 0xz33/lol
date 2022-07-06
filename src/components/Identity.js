import React from 'react';
import { Fade } from 'react-reveal';

export const Identity = () => {
  const identity = {
    human: ['H', 'u', 'm', 'a', 'n'],
    designer: ['D', 'e', 's', 'i', 'g', 'n', 'e', 'r'],
    developer: ['D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'],
  };
  let delay = 0;
  identity.designer.map((letter) => {
    delay = delay + 100;
    return (
      <Fade delay={delay}>
        <p style={{ display: 'inline' }}>{letter}</p>
      </Fade>
    );
  });
};
