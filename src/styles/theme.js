import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: '#f48fb1',
        },
        secondary: {
            main: '#90cbf9',
        },
        text: {
            primary: "#fff",
            secondary: "rgba(255, 255, 255, 0.7)",
            disabled: "rgba(255, 255, 255, 0.5)",
        },
        background: {
            paper: "#424242",
            default: "#212121",
        },
    },
});

export const lightTheme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#1976d2',
        },
        text: {
            primary: "rgba(0, 0, 0, 0.87)",
            secondary: "rgba(0, 0, 0, 0.54)",
            disabled: "rgba(0, 0, 0, 0.38)",
            hint: "rgba(0, 0, 0, 0.38)",
        },
        background: {
            default: "#fff",
            level1: "#fff",
            level2: "#f5f5f5",
            paper: "#f5f5f5",
        },
    }
});
