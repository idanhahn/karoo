import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Box } from '@mui/material';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import styles from './PlotStructureChart.module.css';

const labels = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
  99, 100,
];

const PlotStructureChart = ({
  baseData,
  compareTo,
}: {
  baseData: number[];
  compareTo: any;
}) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'My Menuscript',
        data: baseData,
        borderColor: '#E27D60',
        pointRadius: 0,
        borderWidth: 3,
        tension: 0.6,
      },
      {
        label: compareTo?.title,
        data: compareTo?.plotStructure,
        borderColor: '#41B3A3',
        pointRadius: 0,
        borderWidth: 3,
        borderDash: [10, 5],
        tension: 0.6,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        ticks: {
          display: false,
        },
        drawBorder: false,
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Conflict            Resolution',
          font: {
            family: 'Poppins',
            size: 24,
          },
        },
        ticks: {
          display: false,
        },
        grid: {
          color: function (context: any) {
            if (context.tick.value === 0) {
              return '#AAAAAA80';
            } else {
              return 'transparent';
            }
          },
          lineWidth: 3,
          borderWidth: 3,
          drawBorder: false,
        },
      },
    },
    plugins: {
      title: {
        display: false,
        text: 'Plot Structure Analysis',
      },
      legend: {
        display: compareTo ? true : false,
      },
    },
  };

  return (
    <Box
      // sx={{ width: { xs: '750px', xl: '1500px' } }}
      className={styles.container}
    >
      <Line data={data} options={options} />
    </Box>
  );
};

export default PlotStructureChart;
