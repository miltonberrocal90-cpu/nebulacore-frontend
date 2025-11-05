import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    plan: 'free'
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://nebulacore-backend.onrender.com/api/auth/register', formData);
      alert('Usuario creado correctamente');
      navigate('/login');
    } catch (err) {
      alert(err.response?.data?.error || 'Error al registrar');
    }
  };

  return (
    <div className="register-container">
      <h2>Crear cuenta</h2>
      <p>Este texto es de prueba para verificar que el componente se está cargando correctamente.</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nombre" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Correo" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} required />
        <select name="plan" onChange={handleChange}>
          <option value="free">Free</option>
          <option value="premium">Premium</option>
        </select>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;