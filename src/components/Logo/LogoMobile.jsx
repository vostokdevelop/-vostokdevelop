import Stack from '@mui/material/Stack';

import Star from '@mui/icons-material/Star';
import { Typography } from '@mui/material';

export const Logo = () => (
    <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{
            lineHeight: 0,
            cursor: 'pointer',
            display: 'inline-flex',
        }}
    >
        <Star sx={{ color: '#f00', fontSize: 25, }} />
        <Typography sx={{ color: 'text.primary', fontWeight: 'bold', fontSize: 25, marginBottom: -2 }} variant="button">
            VOSTOK
        </Typography>
    </Stack>
);

export default Logo;
