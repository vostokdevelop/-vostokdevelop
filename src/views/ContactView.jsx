import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

export const ContactView = () => {
    return (
        <Stack direction="column">
            <Typography
                variant="h4"
                sx={{
                    mb: 5,
                    textAlign: { xs: 'center', md: 'left' },
                }}
            >
                Get In Touch
            </Typography>

            <Stack spacing={3} alignItems={{ xs: 'center', md: 'flex-start' }}>
                <Stack spacing={1}>
                    <Typography varitant="body1">
                        Email
                    </Typography>
                    <Link color="primary" variant="body2" href="mailto:hello@example.com">
                        hello@example.com
                    </Link>
                </Stack>

                <Stack spacing={1}>
                    <Typography varitant="body1">
                        Telegram
                    </Typography>
                    <Link color="primary" variant="body2" href="mailto:hello@example.com">
                        hello@example.com
                    </Link>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default ContactView;
