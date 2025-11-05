import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const data = {
  labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Set', 'Oct', 'Nov', 'Dic'],
  datasets: [
    {
      label: 'Clima laboral (%)',
      data: [80, 85, 78, 90, 88, 80, 85, 78, 90, 88, 90, 85],
      fill: false,
      borderColor: '#4caf50',
      tension: 0.3,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { position: 'top' },
    tooltip: { enabled: true },
  },
  scales: {
    y: { beginAtZero: true, max: 100 },
  },
};

export default function Bienestar() {
  return (
    <div>
      <h2>Módulo: Bienestar y clima laboral</h2>
      <p>Seguimiento del clima laboral a lo largo del tiempo.</p>

      <Line data={data} options={options} />
    </div>
  );
}