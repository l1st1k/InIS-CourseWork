export const get_vacancies = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/vacancies`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Cooookie: document.cookie,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch vacancies");
    }
    return response.json();
  } catch (err) {
    console.log(err.message);
    return [];
  }
};

export const delete_vacancy = async (id) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/vacancy/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Cooookie: document.cookie,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to delete Vacancy - ${id}`);
    }

    return response.json();
  } catch (err) {
    console.log(err.message);
    return "Failed";
  }
};

export const get_single_vacancy = async (id) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/vacancy/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Cooookie: document.cookie,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch Vacancy - ${id}`);
    }
    return response.json().then((data) => ({
      data: data,
    }));
  } catch (err) {
    console.log(err.message);
  }
};

export const get_top_cvs = async (id) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/vacancy/${id}/top_cvs`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Cooookie: document.cookie,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch top cvs for Vacancy - ${id}`);
    }
    return response.json();
  } catch (err) {
    console.log(err.message);
    return [];
  }
};
