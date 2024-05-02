export const get_vacancies = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/vacancies`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Cooookie': document.cookie
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch vacancies');
        }
        return response.json();
    } catch (err) {
        console.log(err.message);
        return [];
    }
};

export const delete_vacancy = async (id) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/vacancy/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Cooookie': document.cookie
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to delete Vacancy - ${id}`);
        }

        return response.json();
    } catch (err) {
        console.log(err.message);
        return "Failed";
    }
};