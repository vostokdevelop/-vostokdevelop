import { useContext } from 'react';

import { ThemeProvider } from '@mui/material';

import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

import { SettingsContext } from './contexts/SettingsContext';

import { darkTheme, lightTheme } from './styles/theme';

import Header from "./components/Header";

import HelloView from "./views/HelloView";
import OpsView from "./views/OpsView";

export const App = () => {
    const { themeMode } = useContext(SettingsContext);
    return (
        <ThemeProvider theme={themeMode === 'dark' ? darkTheme : lightTheme}>
            <Box sx={{ background: themeMode === 'dark' ? '#212121' : '#fff' }}>
                <CssBaseline />
                <Container >
                    <Header />
                    <HelloView />
                    <OpsView />
                </Container>
            </Box>
        </ThemeProvider>
    );
};

export default App;
