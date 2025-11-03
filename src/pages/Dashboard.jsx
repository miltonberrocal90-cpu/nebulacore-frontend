import React, { useEffect, useState } from 'react';
import { getModules } from '../services/moduleService';
import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const { user } = useAuth();
  const [modules, setModules] = useState([]);

  useEffect(() => {
    async function fetchModules() {
      const data = await getModules(user.token);
      setModules(data);
    }

    if (user?.token) {
      fetchModules();
    }
  }, [user]);

  return (
    <div>
      <h2>Bienvenido, {user?.name}</h2>
      <h3>Tu plan: {user?.plan}</h3>
      <div className="modules-grid">
        {modules.map((modulo, index) => (
          <Link to={`/modulo/${encodeURIComponent(modulo)}`} key={index} className="module-card">
            <h4>{modulo}</h4>
          </Link>
        ))}
      </div>
    </div>
  );
}