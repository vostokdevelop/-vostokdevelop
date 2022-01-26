import { useState } from 'react';

import cloudUpload from '@iconify/icons-carbon/email';
import { Icon } from '@iconify/react';

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MobileStepper from '@mui/material/MobileStepper';

import Biotech from '@mui/icons-material/BiotechOutlined';
import Science from '@mui/icons-material/ScienceOutlined';
import Security from '@mui/icons-material/SecurityOutlined';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

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
        icon: (
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
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = STEPS.length;
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    return (
        <Stack data-aos="slide-up" direction="column" alignItems="center">

            <Typography textAlign={{ xs: 'center', md: 'start' }} width="100%" variant="h4">
                Contact us
            </Typography>

            <Grid container width="100%" pt={7} pb={3} display={{ xs: 'none', md: 'flex' }}>
                {STEPS.map((value, index) => (
                    <Grid item xs={12} md={4} pb={5}>
                        <ContactLandingStep key={value.title} value={value} index={index} />
                    </Grid>
                ))}
            </Grid>

            <Stack display="flex" alignItems="center" display={{ xs: 'flex', md: 'none' }} pt={5} pb={5}>
                <Box display="flex" alignItems="center" justifyContent="center" sx={{ height: 325, maxWidth: 400, width: '100%', p: 2 }}>
                    <Box minHeight="300px">
                        <ContactLandingStep key={activeStep} value={STEPS[activeStep]} index={activeStep} />
                    </Box>
                </Box>
                <MobileStepper
                    variant="text"
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    style={{ width: "100%" }}
                    nextButton={
                        <Button
                            size="small"
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}
                        >
                            Next
                            <KeyboardArrowRight />
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                            <KeyboardArrowLeft />
                            Back
                        </Button>
                    }
                />
            </Stack>

            <Button color="secondary" style={{ minWidth: "230px" }} onClick={() => openBlank('mailto:tripolskypetr@gmail.com')} variant="contained" size="large" startIcon={<Box component={Icon} icon={cloudUpload} />}>
                Send an email
            </Button>
        </Stack>
    );
};

export default ContactView;
