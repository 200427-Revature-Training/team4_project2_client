import React, { useState, useEffect } from 'react';
import { makeStyles, createStyles, Theme, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, Popover } from '@material-ui/core';
import { SocialEvent } from '../../../models/Event';
import { useHistory } from 'react-router';
import * as attendRemote from '../../../remotes/attend.remote';


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
            minWidth: 250,
            margin: "auto"
        },
    }),
);

interface EventCardComponentProps {
    socialEvent: SocialEvent;
    getEvent: (eventId: number) => void;
}

export const EventCardComponent: React.FC<EventCardComponentProps> = ({ socialEvent, getEvent }) => {
    const classes = useStyles();
    const history = useHistory();
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    // const [disabled, setDisabled] = useState(false);
    // const isUser = typeof(localStorage.getItem('userId')) === "number";

    // useEffect(() => {
    //     decideDisabled()}, [])

    //     const decideDisabled = () => {
    //         if(isUser) {
    //             setDisabled(true);
    //         } else {
    //             setDisabled(false);
    //         }
    //     }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleJoin = async (socialEventId: number) => {
        // const userId = localStorage.getItem('userId')
        const userId = 1;
        if (!userId) {
            alert("please login to join events")
        } else if (!userId && !socialEventId) {
            alert("This Social Event Doesnt Exist Anymore")
        } else {
            const payload = {
                id: userId,
                events: [{ id: socialEventId }]
            }
            console.log(payload);
            try {
                const addedSocialEvent = await attendRemote.addSocialEventToAttendingList(payload);
                alert("add was sucessful")
            } catch {
                alert("Oops You enconuntered and Error that has nothing to do with us")
            }
        }
    }

    const handleRedirect = (e: number) => {
        //pass the social event id to the next page
        // navigating to detail
        // cache["user"] = user;
        // history.push("/template");
        // rendering /template
        // const user = cache["user"] // also handle an empty cache?
        getEvent(e);
        history.push('/forum');
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Card className={classes.rootk} id="event-card" >
            <CardActionArea onClick={() => handleRedirect(socialEvent.id)} id="containerM">
                <CardMedia
                    className={classes.mediak}
                // image="/static/images/cards/contemplative-reptile.jpg"
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
                        <br />
                        Price: <tr>{socialEvent.price}</tr>
                        <br />
                        Max Participants: <tr>{socialEvent.maxPeople}</tr>
                        <br />
                        Starting Time:<tr>{socialEvent.startTime.toISOString()}</tr>
                    </Typography>
                </Popover>
            </CardActions>
        </Card>
    )
}