import { Container, TextField, Button, Typography } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import {register_manager} from "../API";
import React from "react";

export const AddManager = () => {
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!event.target.email.value || !event.target.password.value){
            alert("Please fill all fields.");
            return;
        }
        const formData = new FormData();
        formData.append('email', event.target.email.value);
        formData.append('password', event.target.password.value);

        await register_manager(formData);
        console.log('Added new manager');
        navigate("/managers");
    };

    return (
        <Container component="main" maxWidth="xs">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 8 }}>
                <Typography variant="h5" align="center" color="#d2d2d2" paragraph>
                    Manager registration Form
                </Typography>
                <form onSubmit={handleSubmit} noValidate style={{ width: '100%', marginTop: 1 }}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
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
                        autoComplete="new-password"
                        InputLabelProps={{
                            style: { color: '#cbaeff' },
                        }}
                        InputProps={{
                            style: { color: '#cbaeff' },
                        }}
                    />
                    <Typography variant="subtitle2" align="center" color="#d2d2d2">
                        Don't forget to copy the password
                    </Typography>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{
                            margin: '24px 0 16px',
                            color: "black",
                            bgcolor: "#cbaeff"
                        }}
                    >
                        Register manager
                    </Button>
                </form>
            </div>
        </Container>
    );
};
