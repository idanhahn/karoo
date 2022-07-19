import React from 'react';
import Container from '@mui/material/Container';
import TopBar from './TopBar';

import styles from './layout.module.css';
import Box from '@mui/material/Box';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TopBar></TopBar>
      <Box className={styles.container}>{children}</Box>
    </>
  );
};

export default Layout;
