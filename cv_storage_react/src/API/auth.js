import {api} from "./api_base.js";

export const auth_login = async (data) => {
    try {
        const response = await api.post(`auth/login`, {
            searchParams: {
                as_company: data.get('as_company'),
                login: data.get('login'),
                password: data.get('password'),
            },
            credentials: 'include'
        });
        if (response.status !== 200) throw Error(await response.json());

        await process_cookies(response);
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
            },
            credentials: 'include'
        });
        if (response.status !== 200) throw Error(await response.json());

        await process_cookies(response);
        return response.status;
    } catch (err) {
        console.log(err.message);
        return "Failed";
    }
};

export const auth_logout = async () => {
    try {
        const response = await api.delete(`auth/logout`, {
            credentials: 'include'
        });
        if (response.status !== 200) throw Error(await response.json());

        await process_cookies(response);
        return response.status;
    } catch (err) {
        console.log(err.message);
        return "Failed";
    }
};

const process_cookies = async (response) => {
    let resp = await response.json();
    let cookies = resp["cookies"]
    cookies.forEach(cookie => {
        document.cookie = cookie.replace("; HttpOnly", "");
    });
}