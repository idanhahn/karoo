import React from 'react';
import { Box, Typography } from '@mui/material';
import DialVsNarrChart from './DialVsNarrChart';
import styles from './DialVsNarr.module.css';

const DialVsNarr = ({
  dialogues,
  narratives,
}: {
  dialogues: number[];
  narratives: number[];
}) => {
  return (
    <Box className={styles.container}>
      <Typography className={styles.title}>
        Dialogue vs Narrative Analysis
      </Typography>
      <Box sx={{ mt: 2 }} className={styles.graph}>
        <DialVsNarrChart dialogues={dialogues} narratives={narratives} />
      </Box>
    </Box>
  );
};

export default DialVsNarr;
