import React from 'react';
import { useParams } from 'react-router-dom';

import Empleados from '../components/modules/Empleados';
import Asistencia from '../components/modules/Asistencia';
import VacacionesLicencias from '../components/modules/VacacionesLicencias';
import Horarios from '../components/modules/Horarios';
import BoletasElectronicas from '../components/modules/BoletasElectronicas';
import CalculoPlanillaPLAME from '../components/modules/CalculoPlanillaPLAME';
import AFPNet from '../components/modules/AFPNet';
import GestorDocumental from '../components/modules/GestorDocumental';
import SeguridadLaboral from '../components/modules/SeguridadLaboral';
import ReclutamientoSeleccion from '../components/modules/ReclutamientoSeleccion';
import ReportesAnaliticas from '../components/modules/ReportesAnaliticas';
import Capacitacion from '../components/modules/Capacitacion';
import Evaluaciones from '../components/modules/Evaluaciones';
import Beneficios from '../components/modules/Beneficios';
import BienestarClima from '../components/modules/BienestarClima';
import CumplimientoLegal from '../components/modules/CumplimientoLegal';
import AppColaboradores from '../components/modules/AppColaboradores';

const moduleComponents = {
  Empleados,
  Asistencia,
  VacacionesLicencias,
  Horarios,
  BoletasElectronicas,
  CalculoPlanillaPLAME,
  AFPNet,
  GestorDocumental,
  SeguridadLaboral,
  ReclutamientoSeleccion,
  ReportesAnaliticas,
  Capacitacion,
  Evaluaciones,
  Beneficios,
  BienestarClima,
  CumplimientoLegal,
  AppColaboradores,
};

export default function ModuleView() {
  const { name } = useParams();
  const Component = moduleComponents[name];

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Módulo: {name}</h2>
      {Component ? <Component /> : <p>Este módulo no existe o no está disponible.</p>}
    </div>
  );
}