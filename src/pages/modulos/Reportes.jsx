import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { mes: 'Ene', empleados: 40 },
  { mes: 'Feb', empleados: 45 },
  { mes: 'Mar', empleados: 50 },
  { mes: 'Abr', empleados: 47 },
  { mes: 'May', empleados: 52 },
];

export default function Reportes() {
  return (
    <div>
      <h2>Módulo: Reportes y analíticas</h2>
      <p>Visualiza métricas clave de gestión de personal.</p>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mes" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="empleados" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}