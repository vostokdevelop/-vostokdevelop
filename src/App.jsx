import { useContext } from 'react';

import { ThemeProvider } from '@mui/material';

import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

import { SettingsContext } from './contexts/SettingsContext';

import { darkTheme, lightTheme } from './styles/theme';

import Header from "./components/Header";
import Adjust from "./components/Adjust";

import HelloView from "./views/HelloView";
import OpsView from "./views/OpsView";
// import ProjView from "./views/ProjView";
import ContactView from "./views/ContactView";

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
                    {/*<ProjView />*/}
                    <ContactView />
                </Container>
                <Adjust />
            </Box>
        </ThemeProvider>
    );
};

export default App;
