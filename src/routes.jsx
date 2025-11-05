import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';

// Módulos individuales
import Empleados from './pages/modulos/Empleados';
import Asistencia from './pages/modulos/Asistencia';
import Vacaciones from './pages/modulos/Vacaciones';
import Horarios from './pages/modulos/Horarios';
import Boletas from './pages/modulos/Boletas';
import Planilla from './pages/modulos/Planilla';
import AFPNet from './pages/modulos/AFPNet';
import Documental from './pages/modulos/Documental';
import Seguridad from './pages/modulos/Seguridad';
import Reclutamiento from './pages/modulos/Reclutamiento';
import Reportes from './pages/modulos/Reportes';
import Capacitacion from './pages/modulos/Capacitacion';
import Evaluaciones from './pages/modulos/Evaluaciones';
import Beneficios from './pages/modulos/Beneficios';
import Bienestar from './pages/modulos/Bienestar';
import Legal from './pages/modulos/Legal';
import AppColaboradores from './pages/modulos/AppColaboradores';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Rutas protegidas */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* Rutas por módulo */}
      <Route
        path="/modulo/Empleados"
        element={
          <ProtectedRoute>
            <Empleados />
          </ProtectedRoute>
        }
      />
      <Route
        path="/modulo/Asistencia"
        element={
          <ProtectedRoute>
            <Asistencia />
          </ProtectedRoute>
        }
      />
      <Route
        path="/modulo/Vacaciones"
        element={
          <ProtectedRoute>
            <Vacaciones />
          </ProtectedRoute>
        }
      />
      <Route
        path="/modulo/Horarios"
        element={
          <ProtectedRoute>
            <Horarios />
          </ProtectedRoute>
        }
      />
      <Route
        path="/modulo/Boletas"
        element={
          <ProtectedRoute>
            <Boletas />
          </ProtectedRoute>
        }
      />
      <Route
        path="/modulo/Planilla"
        element={
          <ProtectedRoute>
            <Planilla />
          </ProtectedRoute>
        }
      />
      <Route
        path="/modulo/AFPNet"
        element={
          <ProtectedRoute>
            <AFPNet />
          </ProtectedRoute>
        }
      />
      <Route
        path="/modulo/Documental"
        element={
          <ProtectedRoute>
            <Documental />
          </ProtectedRoute>
        }
      />
      <Route
        path="/modulo/Seguridad"
        element={
          <ProtectedRoute>
            <Seguridad />
          </ProtectedRoute>
        }
      />
      <Route
        path="/modulo/Reclutamiento"
        element={
          <ProtectedRoute>
            <Reclutamiento />
          </ProtectedRoute>
        }
      />
      <Route
        path="/modulo/Reportes"
        element={
          <ProtectedRoute>
            <Reportes />
          </ProtectedRoute>
        }
      />
      <Route
        path="/modulo/Capacitacion"
        element={
          <ProtectedRoute>
            <Capacitacion />
          </ProtectedRoute>
        }
      />
      <Route
        path="/modulo/Evaluaciones"
        element={
          <ProtectedRoute>
            <Evaluaciones />
          </ProtectedRoute>
        }
      />
      <Route
        path="/modulo/Beneficios"
        element={
          <ProtectedRoute>
            <Beneficios />
          </ProtectedRoute>
        }
      />
      <Route
        path="/modulo/Bienestar"
        element={
          <ProtectedRoute>
            <Bienestar />
          </ProtectedRoute>
        }
      />
      <Route
        path="/modulo/Legal"
        element={
          <ProtectedRoute>
            <Legal />
          </ProtectedRoute>
        }
      />
      <Route
        path="/modulo/AppColaboradores"
        element={
          <ProtectedRoute>
            <AppColaboradores />
          </ProtectedRoute>
        }
      />

      {/* Ruta para errores */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}