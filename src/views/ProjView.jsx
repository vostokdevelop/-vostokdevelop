import { useContext } from 'react';

import { SettingsContext } from '../contexts/SettingsContext';

import { Icon } from '@iconify/react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Card from '../components/common/Card';

export const ProjView = () => {
    const { themeMode } = useContext(SettingsContext);
    const isLight = themeMode === 'light';
    return (
        <Grid container columnSpacing={3} alignItems="center" sx={{ mb: 15 }}>
            <Grid data-aos="slide-right" minHeight={{ md: "375px" }} item xs={12} md={6}>
                <Stack
                    spacing={2}
                    sx={{
                        mb: 5,
                        textAlign: { xs: 'center', md: 'left' },
                    }}
                >
                    <Typography variant="h4">Our projects</Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        We normally respond within 2 business days
                    </Typography>
                </Stack>
            </Grid>
            <Grid data-aos="slide-left" item xs={12} md={6} minHeight={{ md: "375px" }}>
                <List>
                    <Card
                        title="CyberCup"
                        src="/icon/cyber.png"
                        description={(
                            <Typography sx={{ color: 'text.secondary' }}>
                                An e-sport platform whete AI is acting as a casino croupier
                                determing the winner of competition captured from user's screen
                            </Typography>
                        )}
                    />
                    <Card
                        title="Skolkovo"
                        src="/icon/sk.png"
                        description={(
                            <Typography sx={{ color: 'text.secondary' }}>
                                The Skolkovo Innovation Center is a high technology business
                                area at Mozhaysky District in Moscow, Russia
                            </Typography>
                        )}
                    />
                    <Card
                        title="NDA"
                        src="/icon/nda.png"
                        description={(
                            <Typography sx={{ color: 'text.secondary' }}>
                                An NDA protects non-public business information
                            </Typography>
                        )}
                    />
                </List>
            </Grid>
        </Grid>
    );
};

export default ProjView;
