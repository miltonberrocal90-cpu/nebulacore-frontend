import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Empleados() {
  const [empleados, setEmpleados] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [nuevoEmpleado, setNuevoEmpleado] = useState({ nombre: '', cargo: '' });

  // Cargar empleados al iniciar
  useEffect(() => {
    axios.get('http://localhost:5000/api/empleados')
      .then(res => setEmpleados(res.data))
      .catch(err => console.error('Error al cargar empleados:', err));
  }, []);

  // Mostrar el formulario
  function handleAgregar() {
    setMostrarFormulario(true);
  }

  // Enviar nuevo empleado
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nuevoEmpleado.nombre || !nuevoEmpleado.cargo) {
      alert('Por favor completa todos los campos');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/empleados', nuevoEmpleado);
      setEmpleados([...empleados, res.data]);
      setNuevoEmpleado({ nombre: '', cargo: '' });
      setMostrarFormulario(false);
    } catch (error) {
      console.error('Error al agregar empleado:', error);
      alert('Hubo un error al guardar el empleado');
    }
  };

  return (
    <div style={{ padding: '1rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Módulo: Empleados</h2>

      <button onClick={handleAgregar} style={{ marginBottom: '1rem' }}>
        Agregar
      </button>

      {mostrarFormulario && (
        <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
          <div style={{ marginBottom: '0.5rem' }}>
            <input
              type="text"
              placeholder="Nombre"
              value={nuevoEmpleado.nombre}
              onChange={(e) => setNuevoEmpleado({ ...nuevoEmpleado, nombre: e.target.value })}
              style={{ padding: '0.5rem', width: '100%' }}
            />
          </div>
          <div style={{ marginBottom: '0.5rem' }}>
            <input
              type="text"
              placeholder="Cargo"
              value={nuevoEmpleado.cargo}
              onChange={(e) => setNuevoEmpleado({ ...nuevoEmpleado, cargo: e.target.value })}
              style={{ padding: '0.5rem', width: '100%' }}
            />
          </div>
          <button type="submit" style={{ padding: '0.5rem 1rem' }}>
            Guardar
          </button>
        </form>
      )}

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0' }}>
            <th style={{ textAlign: 'left', padding: '0.5rem' }}>Nombre</th>
            <th style={{ textAlign: 'left', padding: '0.5rem' }}>Cargo</th>
          </tr>
        </thead>
        <tbody>
          {empleados.map((emp, i) => (
            <tr key={i}>
              <td style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}>{emp.nombre}</td>
              <td style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}>{emp.cargo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}