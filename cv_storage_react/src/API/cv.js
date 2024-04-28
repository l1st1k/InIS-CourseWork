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

export const get_single_cv = async (cv_id) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/cv/${cv_id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Cooookie': document.cookie
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch CV - ${cv_id}`);
    }
    return response.json().then((data) => ({
      data: data,
    }));
  } catch (err) {
    console.log(err.message);
  }
};

export const get_csv = async (cv_id) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/cv/${cv_id}/csv`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Cooookie': document.cookie
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to download .csv CV - ${cv_id}`);
    }
    return response.blob();
  } catch (err) {
    console.log(err.message);
    return "Failed";
  }
};

export const delete_cv = async (cv_id) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/cv/${cv_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Cooookie': document.cookie
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to delete CV - ${cv_id}`);
    }

    return response.json();
  } catch (err) {
    console.log(err.message);
    return "Failed";
  }
};

export const post_cv = async (data) => {
  try {

    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/cv`, {
      method: 'POST',
      headers: {
        'Cooookie': document.cookie
      },
      body: data,

    });
    if (response.status !== 201) {
      throw new Error(`Failed to post CV}`);
    }
    return response.status;
  } catch (err) {
    console.log(err.message);
    return "Failed";
  }
};