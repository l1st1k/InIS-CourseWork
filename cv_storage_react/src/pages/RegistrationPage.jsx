import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import {Link} from "react-router-dom";

export const RegistrationPage = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted');
    };

    return (
        <Container component="main" maxWidth="xs">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 8 }}>
                <Link to="/login" style={{ textDecoration: "none" }}>
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
                        Sign in
                    </Button>
                </Link>
                <form onSubmit={handleSubmit} noValidate style={{ width: '100%', marginTop: 1 }}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="name"
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
                    <div style={{ textAlign: 'center', margin: '10px 0' }}> {/* Centered container */}
                        <input
                            accept="image/*"
                            style={{ display: 'none' }}
                            id="raised-button-file"
                            multiple={false}
                            type="file"
                            onChange={handleFileChange}
                        />
                        <label htmlFor="raised-button-file">
                            <Button variant="outlined" component="span" style={{ color: '#cbaeff', borderColor: '#cbaeff' }}>
                                Upload Photo
                            </Button>
                        </label>
                        {file && <Typography variant="subtitle1" style={{ marginTop: 8 }}>{file.name}</Typography>}
                    </div>
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
                        Register
                    </Button>
                </form>
            </div>
        </Container>
    );
};