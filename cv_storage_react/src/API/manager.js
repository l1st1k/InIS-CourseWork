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