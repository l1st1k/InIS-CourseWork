import {api} from "./api_base.js";

export const company_register = async (formData) => {
    try {
        const response = await api.post('company', {
            body: formData,
            searchParams: {
                name: formData.get('name'),
                email: formData.get('email'),
                password: formData.get('password'),
            },
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