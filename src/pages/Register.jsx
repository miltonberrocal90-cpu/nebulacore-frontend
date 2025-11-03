const API_URL = 'http://localhost:5000/api/modules';

export async function getModules(token) {
  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) throw new Error('Error al obtener módulos');
    return await response.json();
  } catch (error) {
    console.error('Error en getModules:', error);
    return [];
  }
}