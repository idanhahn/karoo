import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Box } from '@mui/material';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
import styles from './EmotionsChart.module.css';

const labels = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const EmotionsChart = ({
  anger,
  fear,
  joy,
  love,
  sadness,
  surprise,
}: {
  anger: number[];
  fear: number[];
  joy: number[];
  love: number[];
  sadness: number[];
  surprise: number[];
}) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Anger',
        data: anger,
        borderColor: '#E27D60',
        backgroundColor: '#E27D60',
        borderWidth: 3,
        tension: 0.6,
      },
      {
        label: 'Fear',
        data: fear,
        borderColor: '#C0C0C0',
        backgroundColor: '#C0C0C0',
        borderWidth: 3,
        tension: 0.6,
      },
      {
        label: 'Joy',
        data: joy,
        borderColor: '#C38D9E',
        backgroundColor: '#C38D9E',
        borderWidth: 3,
        tension: 0.6,
      },
      {
        label: 'Love',
        data: love,
        borderColor: '#85D0CB',
        backgroundColor: '#85D0CB',
        borderWidth: 3,
        tension: 0.6,
      },
      {
        label: 'Sadness',
        data: sadness,
        borderColor: '#E8A87C',
        backgroundColor: '#E8A87C',
        borderWidth: 3,
        tension: 0.6,
      },
      {
        label: 'Surprise',
        data: surprise,
        borderColor: '#41B3A3',
        backgroundColor: '#41B3A3',
        borderWidth: 3,
        tension: 0.6,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        stacked: true,
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: 'Emotion Power Per Percentage',
          font: {
            family: 'Poppins',
            size: 20,
          },
        },
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
  };

  return (
    <Box className={styles.container}>
      <Bar options={options} data={data} />
    </Box>
  );
};

export default EmotionsChart;
