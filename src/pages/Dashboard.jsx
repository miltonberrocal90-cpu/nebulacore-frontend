import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import { obtenerEmpleados } from '../services/empleadoService';
import logo from '../assets/logo.png';
import './Dashboard.css';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [empleados, setEmpleados] = useState([]);

  const modules = [
    { name: 'Empleados', icon: '👥' },
    { name: 'Asistencia', icon: '🕒' },
    { name: 'Vacaciones y licencias', icon: '🏖️' },
    { name: 'Horarios', icon: '📅' },
    { name: 'Boletas electrónicas', icon: '📄' },
    { name: 'Cálculo de planilla + PLAME', icon: '🧮' },
    { name: 'AFP Net', icon: '💼' },
    { name: 'Gestor documental', icon: '📁' },
    { name: 'Seguridad laboral', icon: '🦺' },
    { name: 'Reclutamiento y selección', icon: '🔍' },
    { name: 'Reportes y analíticas', icon: '📊' },
    { name: 'Capacitación', icon: '🎓' },
    { name: 'Evaluaciones', icon: '✅' },
    { name: 'Beneficios', icon: '🎁' },
    { name: 'Bienestar y clima laboral', icon: '🌤️' },
    { name: 'Cumplimiento legal', icon: '⚖️' },
    { name: 'App para colaboradores', icon: '📱' }
  ];

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  useEffect(() => {
    obtenerEmpleados()
      .then(res => setEmpleados(res.data))
      .catch(err => console.error('Error al obtener empleados:', err));
  }, []);

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="logo-section">
          <img src={logo} alt="Logo empresa" className="logo" />
          <h1 className="brand">NebulaCore</h1>
          <button className="logout-button" onClick={logout}>Cerrar sesión</button>
        </div>

        <button className="toggle-button top-right" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? 'Modo claro' : 'Modo oscuro'}
        </button>
      </header>

      <main className="dashboard-main">
        <h2>Bienvenido, {user?.name || 'Admin'}</h2>
        <h3>Tu plan: {user?.plan || 'premium'}</h3>

        <div className="modules-grid">
          {modules.map((modulo, index) => (
            <Link
              to={`/modulo/${encodeURIComponent(modulo.name)}`}
              key={index}
              className={`module-card color-${index % 6}`}
            >
              <span className="module-icon">{modulo.icon}</span>
              <span className="module-name">{modulo.name}</span>
            </Link>
          ))}
        </div>

        <section className="empleados-list">
          <h4>Lista de empleados</h4>
          <ul>
            {empleados.map(emp => (
              <li key={emp._id}>{emp.nombre} – {emp.rol}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}