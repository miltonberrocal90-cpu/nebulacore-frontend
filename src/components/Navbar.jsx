import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  // Ocultar el navbar en rutas específicas como /login
  const hideNavbar = location.pathname === '/login';

  if (hideNavbar) return null;

  return (
    <nav className="navbar">
      {/* Puedes dejar este espacio vacío o agregar navegación si lo necesitas */}
    </nav>
  );
}