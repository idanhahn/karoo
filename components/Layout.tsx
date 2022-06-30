import React from 'react';
import Container from '@mui/material/Container';
import TopBar from './TopBar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TopBar></TopBar>
      <Container className="container">{children}</Container>
      <style>{`
        .container{
          display: flex;
          flex-direction: column;
          margin-top: 40px;
        }
      `}</style>
    </>
  );
};

export default Layout;
