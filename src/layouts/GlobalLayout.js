import React from 'react';
import { Nav, Metadata } from '../components';

const GlobalLayout = ({ children }) => {
  return (
    <>
      <Metadata />
      <Nav />
      <main>{children}</main>
    </>
  );
};

export default GlobalLayout;
