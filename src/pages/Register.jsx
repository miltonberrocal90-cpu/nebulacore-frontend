import React from 'react';

const API_URL = `${process.env.REACT_APP_API_URL}/api/modules`;

export async function getModules(token) {
  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) throw new Error('Error al obtener módulos');
    return await response.json();
  } catch (error) {
    console.error('Error en getModules:', error);
    return [];
  }
}

export default function Register() {
  return (
    <div>
      <h2>Registro</h2>
      {/* Aquí va tu formulario de registro */}
    </div>
  );
}