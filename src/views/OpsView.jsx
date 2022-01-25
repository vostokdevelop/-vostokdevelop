import launchIcon from '@iconify/icons-carbon/launch';
import { Icon } from '@iconify/react';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Image from '../components/common/Image';
import AutoSizer from '../components/common/AutoSizer';
import Contributors from '../components/common/Contributors';

import openBlank from '../utils/openBlank';

export const OpsView = () => {
    return (
        <Grid container columnSpacing={3} alignItems="center" sx={{ mb: 15 }}>
            <Grid data-aos="slide-right" minHeight="375px" item xs={12} md={6} display={{ xs: 'none', md: 'block', overflow: 'hidden' }}>
                <AutoSizer>
                    {({ width, height }) => (
                        <Box display="flex" alignItems="center" justifyContent="center" width={width} height={height} sx={{position: 'relative'}}>
                            <Contributors />
                            <Image
                                src={`/svg/osi_standard_logo.svg`}
                                sx={{ width: 256 / 2, height: 248 / 2, zIndex: 9 }}
                            />
                        </Box>
                    )}
                </AutoSizer>
            </Grid>
            <Grid data-aos="slide-left" minHeight="375px" item xs={12} md={6}>
                <Stack
                    spacing={5}
                    alignItems={{ xs: 'center', md: 'flex-start' }}
                    justifyContent="center"
                    sx={{
                        textAlign: { xs: 'center', md: 'left' },
                    }}
                >

                    <Box display="flex" alignItems="center" display={{ xs: 'flex', md: 'none' }}>
                        <Image
                            src={`/svg/osi_standard_logo.svg`}
                            sx={{ width: 256 / 2, height: 248 / 2 }}
                        />
                    </Box>

                    <Typography sx={{ color: 'text.primary' }} variant="h4">
                        A huge Open Source contribution
                    </Typography>


                    <Typography sx={{ color: 'text.secondary', maxWidth: 565 }}>
                        Ready-to-use BASECRUD List and Item components published for startups for
                        building CRM systems quickly, without bugs and at low cost
                    </Typography>

                        <Button
                            color="secondary"
                            size="large"
                            variant="contained"
                            endIcon={<Box component={Icon} icon={launchIcon} />}
                            onClick={() => openBlank('http://react-declarative.github.io/')}
                        >
                            Public StoryBook
                        </Button>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default OpsView;
