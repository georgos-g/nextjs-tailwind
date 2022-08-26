import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import Container from './Container';

const Layout = ({ children }) => {
  return (
    <>
      <Container>
        <Head />
        <Navbar />
        {children}
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
