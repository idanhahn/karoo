import React from 'react';
import { Box } from '@mui/material';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import styles from './DialVsNarrPie.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const DialVsNarrPie = ({ dialogue_per }: { dialogue_per: number }) => {
  const data = {
    labels: ['Dialogue', 'Narrative'],
    datasets: [
      {
        data: [dialogue_per, 100 - dialogue_per],
        backgroundColor: ['#E27D60', '#C0C0C0'],
        hoverBackgroundColor: ['#E27D6080', '#C0C0C080'],
        borderColor: '#fff',
        borderWidth: 3,
      },
    ],
  };
  return (
    <Box className={styles.container}>
      <Pie data={data} />
    </Box>
  );
};

export default DialVsNarrPie;
