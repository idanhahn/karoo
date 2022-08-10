import React from 'react';
import { Box, Slider, Typography } from '@mui/material';

import styles from './Beats.module.css';
import BeatsChart from './BeatsChart';

const marks = [
  {
    value: 0,
    label: '0%',
  },
  {
    value: 25,
    label: '25%',
  },
  {
    value: 50,
    label: '50%',
  },
  {
    value: 75,
    label: '75%',
  },
  {
    value: 100,
    label: '100%',
  },
];

const Beats = ({
  data,
  compareTo,
  handleSliderChange,
}: {
  data: number[];
  compareTo: any;
  handleSliderChange: any;
}) => {
  return (
    <Box sx={{ mt: 6 }} className={styles.chartSection}>
      <Typography className={styles.analysisName}>
        Plot Beats Analysis
      </Typography>
      <Box className={styles.graph}>
        <BeatsChart baseData={data} compareTo={compareTo} />
      </Box>
      <Box sx={{ ml: 4 }} width={700}>
        <Slider
          sx={{
            color: '#41b3a3',
          }}
          defaultValue={0}
          aria-label="Default"
          valueLabelDisplay="auto"
          onChange={handleSliderChange}
          marks={marks}
        />
      </Box>
    </Box>
  );
};

export default Beats;
