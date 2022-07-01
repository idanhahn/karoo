import { Box } from '@mui/material';
import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const options = {
  scales: {
    r: {
      ticks: {
        display: false,
      },
      pointLabels: {
        font: {
          size: 16,
          weight: 600,
          family: 'Poppins',
        },
      },
      min: 0,
      max: 10,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const RadarChart = ({ traits }: { traits: number[] }) => {
  const data = {
    labels: ['Valuation', 'Readability', 'Complexity', 'Pace', 'Trending'],
    datasets: [
      {
        data: traits,
        backgroundColor: '#E27D6040',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return <Radar data={data} options={options} />;
};

export default RadarChart;
