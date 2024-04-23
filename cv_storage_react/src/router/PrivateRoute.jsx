import React from 'react';
import { Navigate } from 'react-router-dom';
import { useStore } from "../store/index.js";

export const PrivateRoute = ({ component: Component, ...rest }) => {
    const { is_auth } = useStore();
    return is_auth ? <Component {...rest} /> : <Navigate to="/login" />;
};
