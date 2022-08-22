import React from 'react';
import { Box } from '@mui/material';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import styles from './DialVsNarrPie.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const DialVsNarrPie = ({ emotions }: { emotions: number[] }) => {
  const data = {
    labels: ['Anger', 'Fear', 'Joy', 'Love', 'Sadness', 'Surprise'],
    datasets: [
      {
        data: emotions,
        backgroundColor: [
          '#E27D60',
          '#C0C0C0',
          '#C38D9E',
          '#85D0CB',
          '#E8A87C',
          '#41B3A3',
        ],
        hoverBackgroundColor: [
          '#E27D6080',
          '#C0C0C0',
          '#C38D9E',
          '#85D0CB',
          '#E8A87C',
          '#41B3A3',
        ],
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
