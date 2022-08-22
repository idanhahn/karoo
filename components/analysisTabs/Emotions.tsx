import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from './Emotions.module.css';
import EmotionsChart from './EmotionsChart';
import EmotionsPie from './EmotionsPie';

const Emotions = ({
  anger,
  fear,
  joy,
  love,
  sadness,
  surprise,
  emotions,
}: {
  anger: number[];
  fear: number[];
  joy: number[];
  love: number[];
  sadness: number[];
  surprise: number[];
  emotions: number[];
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
        <IconButton onClick={handleBack} disabled={activeTab === 0}>
          <ArrowBackIosIcon />
        </IconButton>
        <Typography className={styles.title}>
          {/* {activeTab === 2
            ? 'Emotions Analysis'
            : 'Emotions Classification'} */}
          Emotions Analysis
        </Typography>
        <IconButton onClick={handleForward} disabled={activeTab === 2}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
      <Box sx={{ mt: 2 }} className={styles.graph}>
        {activeTab === 0 ? (
          <EmotionsChart
            anger={anger}
            fear={fear}
            joy={joy}
            love={love}
            sadness={sadness}
            surprise={surprise}
          />
        ) : null}
        {activeTab === 1 ? <EmotionsPie emotions={emotions} /> : null}
        {activeTab === 2 ? null : null}
      </Box>
    </Box>
  );
};

export default Emotions;
