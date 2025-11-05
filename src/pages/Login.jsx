import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { loginUser } from '../services/authService';
import logo from '../assets/logo.png';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = await loginUser({ email, password });
    if (userData?.token && userData?.user) {
      login({ ...userData.user, token: userData.token });
      navigate('/dashboard');
    }
  };

  return (
    <div className="login-container">
      <button className="toggle-button top-right" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? 'Modo claro' : 'Modo oscuro'}
      </button>

      <div className="logo-section">
        <img src={logo} alt="NebulaCore" className="logo" />
        <h1>NebulaCore</h1>
      </div>

      <form className="login-form" onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">Ingresar</button>
      </form>

      <div className="register-link">
        <p>¿No tienes cuenta?</p>
        <Link to="/register">
          <button>Crear cuenta</button>
        </Link>
      </div>
    </div>
  );
}