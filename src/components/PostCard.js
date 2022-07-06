import React from 'react';
import styled from 'styled-components';

export const PostCard = (children) => {
  return <Card>{children}</Card>;
};

const Card = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
