const API_URL = 'http://localhost:5000/api/auth';

export async function loginUser(credentials) {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) throw new Error('Login fallido');
    return await response.json();
  } catch (error) {
    console.error('Error en login:', error);
    return null;
  }
}

export async function registerUser(data) {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error('Registro fallido');
    return await response.json();
  } catch (error) {
    console.error('Error en registro:', error);
    return null;
  }
}