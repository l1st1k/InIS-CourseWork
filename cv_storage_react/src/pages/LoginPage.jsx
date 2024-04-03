import React, { useState } from 'react';
import { Container, TextField, Button, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import {Link} from "react-router-dom";

export const LoginPage = () => {
    const [authType, setAuthType] = useState('company');

    const handleAuthTypeChange = (event) => {
        setAuthType(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can add your submit logic
        console.log('Form submitted');
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