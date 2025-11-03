import React from 'react';
import { useAuth } from '../hooks/useAuth';

export default function Navbar() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="navbar">
      <h1>NebulaCore</h1>
      {user?.token && (
        <button onClick={handleLogout}>Cerrar sesión</button>
      )}
    </nav>
  );
}