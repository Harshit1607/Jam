const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const createInfo = async (data) => {
  try {
    const response = await fetch(`${API_URL}/info`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to submit');
    return await response.json();
  } catch (error) {
    console.error('Error creating info:', error);
    throw error;
  }
};
