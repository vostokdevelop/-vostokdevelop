import { useContext } from 'react';

import { ThemeProvider } from '@mui/material';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import { SettingsContext } from './contexts/SettingsContext';

import { darkTheme, lightTheme } from './styles/theme';

import Header from "./components/Header";

export const App = () => {
    const { themeMode } = useContext(SettingsContext);
    return (
        <ThemeProvider theme={themeMode === 'dark' ? darkTheme : lightTheme}>
            <Box sx={{ background: themeMode === 'dark' ? '#212121' : '#fff' }}>
                <Container >
                    <Header />
                </Container>
            </Box>
        </ThemeProvider>
    );
};

export default App;
