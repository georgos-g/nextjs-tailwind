import React from 'react';
import Head from 'next/head';
import Footer from './Footer';
import Container from './Container';

const Layout = ({ children }) => {
  return (
    <>
      <Container>
        <Head>
          <title>Georgos Gakis | Fronend Developer & Media Designer </title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        {children}
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
