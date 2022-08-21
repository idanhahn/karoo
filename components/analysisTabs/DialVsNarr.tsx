import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import DialVsNarrChart from './DialVsNarrChart';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from './DialVsNarr.module.css';
import DialVsNarrPie from './DialVsNarrPie';

const DialVsNarr = ({
  dialogues,
  narratives,
  dialogue_per,
}: {
  dialogues: number[];
  narratives: number[];
  dialogue_per: number;
}) => {
  const [activeTab, setActiveTab] = React.useState(0);

  const handleBack = () => {
    if (activeTab > 0) {
      setActiveTab(activeTab - 1);
    }
  };

  const handleForward = () => {
    if (activeTab < 1) {
      setActiveTab(activeTab + 1);
    }
  };

  return (
    <Box className={styles.container}>
      <Box className={styles.titleContainer}>
        <IconButton onClick={handleBack}>
          <ArrowBackIosIcon />
        </IconButton>
        <Typography className={styles.title}>
          Dialogue vs Narrative Analysis
        </Typography>
        <IconButton onClick={handleForward}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
      <Box sx={{ mt: 2 }} className={styles.graph}>
        {activeTab === 0 ? (
          <DialVsNarrChart dialogues={dialogues} narratives={narratives} />
        ) : null}
        {activeTab === 1 ? <DialVsNarrPie dialogue_per={dialogue_per} /> : null}
      </Box>
    </Box>
  );
};

export default DialVsNarr;
