import cloudUpload from '@iconify/icons-carbon/email';
import { Icon } from '@iconify/react';

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Biotech from '@mui/icons-material/BiotechOutlined';
import Science from '@mui/icons-material/ScienceOutlined';
import Security from '@mui/icons-material/SecurityOutlined';

import ContactLandingStep from '../components/ContactLandingStep';

import openBlank from '../utils/openBlank';

const STEPS = [
    {
        title: 'Product Research',
        description: "We will validate a product idea and see if it'll be successful or not.",
        icon: (
            <Biotech style={{ fontSize: 80 }} />
        ),
    },
    {
        title: 'Tech Implementation',
        description: 'We will select the technological equipment which will solve the problems of your company',
        icon:  (
            <Science style={{ fontSize: 80 }} />
        ),
    },
    {
        title: 'NDA Agreement',
        description: 'We will stick to a non-disclosure agreement',
        icon: (
            <Security style={{ fontSize: 70 }} />
        ),
    },
];

export const ContactView = () => {
    return (
        <Stack direction="column" alignItems="center">

            <Typography textAlign={{xs: 'center', md: 'start'}} width="100%" variant="h4">
                Contact us
            </Typography>

            <Grid container width="100%" pt={7} pb={3}>
                {STEPS.map((value, index) => (
                    <Grid item xs={12} md={4} pb={5}>
                        <ContactLandingStep key={value.title} value={value} index={index} />
                    </Grid>
                ))}
            </Grid>

            <Button color="secondary" onClick={() => openBlank('mailto:tripolskypetr@gmail.com')} variant="contained" size="large" startIcon={<Box component={Icon} icon={cloudUpload} />}>
                Send an email
            </Button>
        </Stack>
    );
};

export default ContactView;
