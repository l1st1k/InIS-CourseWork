import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./assets/styles/index.css";
import { AppRouter } from "./router";
import {createTheme, ThemeProvider} from "@mui/material";


// Create a custom theme
const theme = createTheme({
    palette: {
        primary: {
            main: '#cbaeff',
            contrastText: '#fff',
        },
    },
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#a96bff',
                    },
                },
            },
        },
        MuiFormControlLabel: {
            styleOverrides: {
                label: {
                    color: '#cbaeff',
                },
            },
        },
        MuiRadio: {
            styleOverrides: {
                root: {
                    color: '#cbaeff',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                outlined: {
                    color: '#cbaeff',
                    borderColor: '#cbaeff',
                    '&:hover': {
                        backgroundColor: 'rgba(203, 174, 255, 0.1)',
                    },
                },
                contained: {
                    backgroundColor: '#cbaeff',
                    '&:hover': {
                        backgroundColor: '#a96bff',
                    },
                },
            },
        },
    },
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    </ThemeProvider>

);
