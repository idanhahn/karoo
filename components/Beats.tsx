import React from 'react';
import { Box, Slider, Typography } from '@mui/material';

import styles from './Beats.module.css';
import BeatsChart from './BeatsChart';

const Beats = ({ data, compareTo }: { data: number[]; compareTo: any }) => {
  return (
    <Box className={styles.container}>
      <Typography className={styles.title}>Plot Beats Analysis</Typography>
      <Box sx={{ mt: 2 }} className={styles.graph}>
        <BeatsChart baseData={data} compareTo={compareTo} />
      </Box>
    </Box>
  );
};

export default Beats;
