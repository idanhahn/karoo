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

const PlotStructureChart = ({ plotData }: { plotData: number[] }) => {
  // const labels = [
  //   0.0, 1.32, 2.63, 3.95, 5.26, 6.58, 7.89, 9.21, 10.53, 11.84, 13.16, 14.47,
  //   15.79, 17.11, 18.42, 19.74, 21.05, 22.37, 23.68, 25.0, 26.32, 27.63, 28.95,
  //   30.26, 31.58, 32.89, 34.21, 35.53, 36.84, 38.16, 39.47, 40.79, 42.11, 43.42,
  //   44.74, 46.05, 47.37, 48.68, 50.0, 51.32, 52.63, 53.95, 55.26, 56.58, 57.89,
  //   59.21, 60.53, 61.84, 63.16, 64.47, 65.79, 67.11, 68.42, 69.74, 71.05, 72.37,
  //   73.68, 75.0, 76.32, 77.63, 78.95, 80.26, 81.58, 82.89, 84.21, 85.53, 86.84,
  //   88.16, 89.47, 90.79, 92.11, 93.42, 94.74, 96.05, 97.37, 98.68, 100.0,
  // ];

  // const dataPoints = [
  //   -11.2, -18.8, -14.1, -22.1, -31.5, -35.8, -32.7, -30.0, -34.1, -37.3, -42.0,
  //   -32.4, -29.7, -18.3, -15.3, -3.6, 10.0, 28.1, 25.4, 30.8, 33.6, 35.6, 45.6,
  //   44.4, 43.5, 37.0, 39.8, 30.1, 18.7, 14.8, 23.4, 17.8, 12.4, 3.5, -8.3,
  //   -15.1, -8.8, -8.5, -11.9, -4.3, -5.6, -5.3, -18.1, -21.8, -22.7, -18.9,
  //   -6.5, -21.7, -23.9, -20.1, -33.5, -29.6, -24.2, -17.3, -28.1, -38.2, -30.1,
  //   -34.6, -40.4, -46.8, -41.2, -37.2, -32.8, -38.0, -43.2, -44.9, -46.4, -43.8,
  //   -44.0, -41.7, -30.5, -19.2, -3.9, -6.9, 0.6, 23.1, 42.5,
  // ];

  const labels = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78,
    79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97,
    98, 99, 100,
  ];

  const dataPoints = plotData;

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Plot Structure',
        data: dataPoints,
        borderColor: '#E27D60',
        pointRadius: 0,
        borderWidth: 3,
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
            weight: 500,
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
        display: false,
      },
    },
  };

  return (
    <Box className={styles.container}>
      <Line data={data} options={options} />
    </Box>
  );
};

export default PlotStructureChart;
