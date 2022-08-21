import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import DialVsNarrChart from './DialVsNarrChart';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from './DialVsNarr.module.css';
import DialVsNarrPie from './DialVsNarrPie';
import DialVsNarrVsPaceChart from './DialVsNarrVsPaceChart';

const DialVsNarr = ({
  dialogues,
  narratives,
  pace,
  dialogue_per,
}: {
  dialogues: number[];
  narratives: number[];
  pace: number[];
  dialogue_per: number;
}) => {
  const [activeTab, setActiveTab] = React.useState(0);

  const handleBack = () => {
    if (activeTab > 0) {
      console.log(narratives);
      setActiveTab(activeTab - 1);
    }
  };

  const handleForward = () => {
    if (activeTab < 2) {
      setActiveTab(activeTab + 1);
    }
  };

  return (
    <Box className={styles.container}>
      <Box className={styles.titleContainer}>
        <IconButton onClick={handleBack} disabled={activeTab === 0}>
          <ArrowBackIosIcon />
        </IconButton>
        <Typography className={styles.title}>
          {activeTab === 2
            ? 'Dialogue Vs Pace Analysis'
            : 'Dialogue Vs Narrative Analysis'}
        </Typography>
        <IconButton onClick={handleForward} disabled={activeTab === 2}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
      <Box sx={{ mt: 2 }} className={styles.graph}>
        {activeTab === 0 ? (
          <DialVsNarrChart dialogues={dialogues} narratives={narratives} />
        ) : null}
        {activeTab === 1 ? <DialVsNarrPie dialogue_per={dialogue_per} /> : null}
        {activeTab === 2 ? (
          <DialVsNarrVsPaceChart
            dialogues={dialogues}
            narratives={narratives}
            pace={pace.map((p) => p * 2)}
          />
        ) : null}
      </Box>
    </Box>
  );
};

export default DialVsNarr;
