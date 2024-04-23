export const get_all_cvs = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/cvs`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Cooookie': document.cookie
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch CVs');
    }

    return response.json();
  } catch (err) {
    console.log(err.message);
    return [];
  }
};
