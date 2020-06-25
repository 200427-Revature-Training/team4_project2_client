import React from 'react';
import { makeStyles, createStyles, Theme, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, Popover } from '@material-ui/core';
import { SocialEvent } from '../../../models/Event';
import { useHistory } from 'react-router';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        containerk: {
            display: 'flex',
            paddingTop: 40,
        },
        rootk: {
            maxWidth: 345,
            maxHeight: 500,
            margin: 'auto',
        },
        mediak: {
            height: 50,
            minWidth: 300,
        },
        eventCardButtons: {
            margin: 'auto'
        },
        typography: {
            padding: theme.spacing(1),
            minHeight: 140,
            minWidth: 300,
        },
    }),
);

interface EventCardComponentProps {
    socialEvent: SocialEvent;
}

export const EventCardComponent: React.FC<EventCardComponentProps> = ({ socialEvent }) => {
    const classes = useStyles();
    const history = useHistory();
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleJoin = async (socialEventId: number) => {
        // const userId = localStorage.getItem('userId')
        // if (!userId || !socialEventId) {
        //activate alert
        // } else {
        // payload = {
        //     socialEventId: socialEventId,
        //     userId: userId
        // }
        // const addedSocialEvent = await attendRemote.addSocialEventToAttendingList(socialEventId, UserId)
        // activate alert
        // }
    }

    const handleRedirect = (e: number) => {
        //pass the social event id to the next page
        const cache = {}
        // navigating to detail
        // cache["user"] = user;
        // history.push("/template");

        // rendering /template
        // const user = cache["user"] // also handle an empty cache?
        
        history.push('/forum');
        //history push to the next page? and use a cache to store values or local storage. 
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Card className={classes.rootk} id="event-card">
            <CardActionArea>
                <CardMedia
                    className={classes.mediak}
                // image="/static/images/cards/contemplative-reptile.jpg"
                // title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {socialEvent.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {socialEvent.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions >
                <Button className={classes.eventCardButtons} size="small" color="primary"
                    onClick={() => handleJoin(socialEvent.id)}>
                    Join
                </Button>
                <Button className={classes.eventCardButtons} size="small" color="primary"
                    onClick={() => handleRedirect(socialEvent.id)}>
                    Explore
                </Button>
                <Button className={classes.eventCardButtons} size="small" color="primary" onClick={handleClick}>
                    Details
                    </Button>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <Typography className={classes.typography}>
                        <tr>{socialEvent.description}</tr>
                        Price: <tr>{socialEvent.price}</tr>
                        Max Participants: <tr>{socialEvent.maxPeople}</tr>
                        Starting Time:<tr>{socialEvent.startTime.toISOString()}</tr>
                    </Typography>
                </Popover>
            </CardActions>
        </Card>
    )
}