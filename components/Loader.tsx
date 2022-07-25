import { Box } from '@mui/material';
import React from 'react';
import { ClockLoader } from 'react-spinners';

import styles from './Loader.module.css';

const Loader = () => {
  return (
    <Box sx={{ mb: 10 }} className={styles.spinner}>
      <ClockLoader color="#85D0CB" size={250} />
    </Box>
  );
};

export default Loader;
