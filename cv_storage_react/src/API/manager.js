import {api} from "./api_base.js";

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

export const register_manager = async (formData) => {
    try {
        const response = await api.post('manager', {
            body: formData,
            searchParams: {
                email: formData.get('email'),
                password: formData.get('password'),
            },
            headers: {
                'Content-Type': 'application/json',
                'Cooookie': document.cookie
            }
        });

        const responseBody = await response.json();

        console.log(responseBody);
        return response.status;
        if (response.status !== 200) throw Error(await response.json());
        console.log(await response.json());
        return response.status;
    } catch (err) {
        console.log(err);
        return "Failed";
    }
};