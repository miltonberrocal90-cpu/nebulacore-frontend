import React from 'react';
import { VictoryPie } from 'victory';

const data = [
  { x: 'Excelente', y: 35 },
  { x: 'Bueno', y: 40 },
  { x: 'Regular', y: 15 },
  { x: 'Malo', y: 10 },
];

export default function Evaluaciones() {
  return (
    <div>
      <h2>Módulo: Evaluaciones</h2>
      <p>Distribución de resultados de evaluaciones de desempeño.</p>

      <VictoryPie
        data={data}
        colorScale={['#4caf50', '#2196f3', '#ffc107', '#f44336']}
        labels={({ datum }) => `${datum.x}: ${datum.y}%`}
        style={{
          labels: { fontSize: 14, fill: '#333' },
        }}
      />
    </div>
  );
}