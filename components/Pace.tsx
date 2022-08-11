import { Box, Typography } from '@mui/material';
import React from 'react';

import styles from './Pace.module.css';
import PaceChart from './PaceChart';

const Pace = ({ data, compareTo }: { data: number[]; compareTo: any }) => {
  return (
    <Box className={styles.container}>
      <Typography className={styles.title}>Pace Analysis</Typography>
      <Box sx={{ mt: 2 }} className={styles.graph}>
        <PaceChart baseData={data} compareTo={compareTo} />
      </Box>
    </Box>
  );
};

export default Pace;
