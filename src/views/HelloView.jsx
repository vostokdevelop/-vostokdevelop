import { useRef } from 'react';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Skeleton from '@mui/material/Skeleton';

import Star from '@mui/icons-material/Star';

import Image from '../components/common/Image';
import AutoSizer from '../components/common/AutoSizer';

export const HelloView = () => {
    return (
        <Grid container columnSpacing={3} alignItems="center" sx={{ mb: 15, }}>
            <Grid data-aos="slide-right" item xs={12} md={6}>
                <Stack
                    spacing={5}
                    alignItems={{ xs: 'center', md: 'flex-start' }}
                    justifyContent="center"
                    py={6}
                    sx={{
                        textAlign: { xs: 'center', md: 'left' },
                    }}
                >

                    <Box display="flex" alignItems="center" display={{ xs: 'flex', md: 'none' }}>
                        <Star sx={{ color: '#f00', fontSize: 125 }} />
                    </Box>

                    <Typography sx={{ color: 'text.primary' }} variant="h4">
                        Create Your MVP<br /> Today with <br />
                        <Box component="span" sx={{ color: 'primary.main' }}>
                            VOSTOK
                        </Box>
                    </Typography>


                    <Typography sx={{ color: 'text.secondary', maxWidth: 565 }}>
                        We are building apps on top of MUI, a powerful library that provides flexible,
                        customizable, and easy-to-use components.
                    </Typography>

                    <Stack direction="row" spacing={2.5}>
                        {['figma', 'javascript', 'typescript', 'material', 'react'].map((icon) => (
                            <Image
                                key={icon}
                                alt={icon}
                                src={`/svg/ic_platform_${icon}.svg`}
                                sx={{ width: 32, height: 32 }}
                            />
                        ))}
                    </Stack>
                </Stack>
            </Grid>
            <Grid data-aos="slide-left" minHeight="275px" item xs={12} md={6} display={{ xs: 'none', md: 'block' }}>
                <AutoSizer>
                    {({ height, width }) => (
                        <Stack
                            orientation="row"
                            spacing={1}
                            width={width}
                            height={height}
                        >
                            <Skeleton animation="false" height={height - 90} variant="rectangular" />
                            <Skeleton animation="false" height={30} width={width * 0.75} wid variant="rectangular" />
                            <Skeleton animation="false" height={30} width={width * 0.65}  variant="rectangular" />
                            <Skeleton animation="false" height={30} width={width * 0.55}  variant="rectangular" />
                        </Stack>
                    )}
                </AutoSizer>
            </Grid>
        </Grid>
    );
};

export default HelloView;
