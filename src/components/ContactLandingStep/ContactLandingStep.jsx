import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

export const ContactLandingStep = ({
    value,
    index,
}) => {
    return (
        <Stack direction="column" alignItems="center">
            <Box
                component={Avatar}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 120,
                    width: 120,
                }}
            >
                {value.icon}
            </Box>
            <Typography variant="overline" sx={{ mt: 1, display: 'block', color: 'text.disabled' }}>
                Step {index + 1}
            </Typography>
            <Typography variant="h5" sx={{ mt: 1, mb: 1 }}>
                {value.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', maxWidth: 255, textAlign: 'center' }}>
                {value.description}
            </Typography>
        </Stack>
    );
};

export default ContactLandingStep;
