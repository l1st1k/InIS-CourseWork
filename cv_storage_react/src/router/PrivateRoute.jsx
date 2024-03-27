import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export const PrivateRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = Cookies.get('access_token_cookie');

    return isAuthenticated ? <Component {...rest} /> : <Navigate to="/catalog" />;
};
