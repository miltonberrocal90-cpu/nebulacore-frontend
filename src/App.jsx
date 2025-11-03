import React from 'react';
import AppRoutes from './routes';
import Navbar from './components/Navbar';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <main>
        <AppRoutes />
      </main>
    </AuthProvider>
  );
}

export default App;