import { Box, Slider, Typography } from '@mui/material';
import React from 'react';
import prisma from '../lib/prisma';
import PlotStructureChart from './PlotStructureChart';

import styles from './PlotStructure.module.css';

const PlotStructure = ({
  data,
  compareTo,
}: {
  data: number[];
  compareTo: any;
}) => {
  return (
    <Box className={styles.container}>
      <Typography className={styles.title}>Plot Structure Analysis</Typography>
      <Box sx={{ mt: 2 }} className={styles.graph}>
        <PlotStructureChart baseData={data} compareTo={compareTo} />
      </Box>
    </Box>
  );
};

export default PlotStructure;
