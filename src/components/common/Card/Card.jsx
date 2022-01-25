import ListItem from '@mui/material/ListItem';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';

export const Card = ({
    title,
    src,
    description,
}) => {
    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar loading="lazy" src={src} />
            </ListItemAvatar>
            <ListItemText
                primary={title}
                secondary={description}
            />
        </ListItem>
    )
};

export default Card;
