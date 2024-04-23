import React, { useState } from 'react';
import { Container, TextField, Button, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import {Link, useNavigate} from "react-router-dom";
import {auth_login} from "../API/index.js";
import {useStore} from "../store/index.js";
import Cookies from "js-cookie";

export const LoginPage = () => {
    const [authType, setAuthType] = useState('company');
    const { setAuthState } = useStore();
    const navigate = useNavigate();

    const handleAuthTypeChange = (event) => {
        setAuthType(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!event.target.email.value || !event.target.password.value) {
            alert("Please fill all fields.");
            return;
        }
        const formData = new FormData();
        formData.append('login', event.target.email.value);
        formData.append('password', event.target.password.value);
        formData.append('as_company', authType === 'company'? 'True' : 'False');
        console.log('Log in form submitted');
        let resp = await auth_login(formData);
        if (resp !== 200) {
            alert("Username or password is incorrect.");
        } else {
            const isAuthenticated = Cookies.get('auth_str');
            setAuthState(!!isAuthenticated);
            navigate("/");
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 8 }}>
                <Link to="/registration" style={{ textDecoration: "none" }}>
                    <Button
                        variant="outlined"
                        size="small"
                        style={{ margin: '8px' }}
                        sx={{
                            color: '#cbaeff',
                            borderColor: '#cbaeff',
                            '&:hover': {
                                backgroundColor: 'rgba(203, 174, 255, 0.1)',
                                borderColor: '#cbaeff',
                            },
                        }}
                    >
                        Register new company
                    </Button>
                </Link>
                <RadioGroup
                    row
                    value={authType}
                    onChange={handleAuthTypeChange}
                    aria-label="authorization type"
                    name="authType"
                    sx={{
                        '.MuiFormControlLabel-label': { color: '#cbaeff' },
                        '.MuiSvgIcon-root': { color: '#cbaeff' },
                        margin: '8px 0'
                    }}
                >
                    <FormControlLabel value="company" control={<Radio />} label="As Company" />
                    <FormControlLabel value="manager" control={<Radio />} label="As Manager" />
                </RadioGroup>
                <form onSubmit={handleSubmit} noValidate style={{ marginTop: 1 }}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        InputLabelProps={{
                            style: { color: '#cbaeff' },
                        }}
                        InputProps={{
                            style: { color: '#cbaeff' },
                        }}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        InputLabelProps={{
                            style: { color: '#cbaeff' },
                        }}
                        InputProps={{
                            style: { color: '#cbaeff' },
                        }}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{
                            margin: '24px 0 16px',
                            color: "black",
                            bgcolor: "#cbaeff",
                        }}
                    >
                        Sign In
                    </Button>
                </form>
            </div>
        </Container>
    );
};
