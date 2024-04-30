export const get_managers = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/managers`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Cooookie': document.cookie
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch managers');
        }
        return response.json();
    } catch (err) {
        console.log(err.message);
        return [];
    }
};

export const delete_manager = async (id) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/manager/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Cooookie': document.cookie
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to delete Manager - ${id}`);
        }

        return response.json();
    } catch (err) {
        console.log(err.message);
        return "Failed";
    }
};