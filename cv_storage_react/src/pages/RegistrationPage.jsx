import React, {useRef, useState} from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { company_register } from "../API";

export const RegistrationPage = () => {
    const [file, setFile] = useState(null);
    const navigate = useNavigate();

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!event.target.name.value || !event.target.email.value || !event.target.password.value){
            alert("Please fill all fields.");
            return;
        }
        const formData = new FormData();
        formData.append('name', event.target.name.value);
        formData.append('email', event.target.email.value);
        formData.append('password', event.target.password.value);
        if (file) {
            formData.append('file', file);
        }

        await company_register(formData);
        console.log('Registration form submitted');
        navigate("/login");
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
