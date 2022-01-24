import { makeStyles as makeMuiStyles } from "@mui/styles";

export const makeStyles = (cb) => makeMuiStyles((theme) => typeof cb === 'function' ? cb(theme) : cb);

export default makeStyles;
