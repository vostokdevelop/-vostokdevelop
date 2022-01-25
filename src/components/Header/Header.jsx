import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import { useContext } from 'react';
import { SettingsContext } from '../../contexts/SettingsContext';

import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import Brightness7 from '@mui/icons-material/Brightness7';
import Brightness4 from '@mui/icons-material/Brightness4';
import GitHub from '@mui/icons-material/GitHub';

import Logo from '../Logo';

import openBlank from '../../utils/openBlank';

export const Header = () => {
    const { themeMode, onToggleMode } = useContext(SettingsContext);
    const isLight = themeMode === 'light';
    return (
        <Toolbar dense sx={{pl: '0 !important', pr: '0 !important'}}>
            <Grid container>
                <Grid item>
                    <Box sx={{
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        <Logo />
                    </Box>
                </Grid>
                <Grid item xs />
                <Grid item>
                    <Stack sx={{ height: '100%' }} alignItems="center" direction="row" spacing={1}>
                        <Button sx={{
                            fontWeight: 'bold',
                        }}>
                            Hire us
                        </Button>
                        <IconButton onClick={onToggleMode}>
                            {isLight ? <Brightness4 /> : <Brightness7 />}
                        </IconButton>
                        <IconButton onClick={() => openBlank('https://github.com/tripolskypetr')}>
                            <GitHub />
                        </IconButton>
                    </Stack>
                </Grid>
            </Grid>
        </Toolbar>
    );
};

export default Header;
