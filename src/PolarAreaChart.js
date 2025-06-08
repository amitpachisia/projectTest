import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
  Title
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

// Register required Chart.js components
ChartJS.register(
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
  Title
);

const PolarAreaChart = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    datasets: [
      {
        label: 'Votes',
        data: [11, 16, 7, 14, 6],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
      },
    ],
  };

  const options = {
    responsive: false, // disables auto-resizing to allow fixed size
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Favorite Colors',
      },
    },
  };

  return (
    <div style={{margin:"auto"}}>
      <PolarArea data={data} options={options} width={1200} height={1000} />
    </div>
  );
};

export default PolarAreaChart;
