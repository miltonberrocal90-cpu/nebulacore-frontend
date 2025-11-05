import axios from 'axios';

export const obtenerEmpleados = () => {
  return axios.get(`${process.env.REACT_APP_API_URL}/api/empleados`);
};