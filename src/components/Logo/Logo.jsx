import makeStyles from '../../styles/makeStyles';

import Typography from '@mui/material/Typography';

const useStyles = makeStyles((theme) => ({
    text: {
        fontSize: 46,
    }
}));

export const Logo = () => {
    const classes = useStyles();
    return (
        <Typography variant="button" className={classes.text}>
            VH
        </Typography>
    )
};

export default Logo;
