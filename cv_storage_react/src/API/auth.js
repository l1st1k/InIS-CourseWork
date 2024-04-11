import {api} from "./api_base.js";

export const auth_login = async (data) => {
    try {
        const response = await api.post(`auth/login`, {
            headers: {
                Accept: "application/json",
                'content-type': 'application/json'
            },
            body: data,
        });
        if (response.status !== 200) throw Error(await response.json());
        console.log(await response.json());
        return response.status;
    } catch (err) {
        console.log(err.message);
        return "Failed";
    }
};

export const auth_refresh = async () => {
    try {
        const response = await api.post(`auth/refresh`, {
            headers: {
                Accept: "application/json",
            }
        });
        if (response.status !== 200) throw Error(await response.json());
        console.log(await response.json());
        return response.status;
    } catch (err) {
        console.log(err.message);
        return "Failed";
    }
};

export const auth_logout = async () => {
    try {
        const response = await api.delete(`auth/logout`);
        if (response.status !== 200) throw Error(await response.json());
        return response.json();
    } catch (err) {
        console.log(err.message);
        return "Failed";
    }
};