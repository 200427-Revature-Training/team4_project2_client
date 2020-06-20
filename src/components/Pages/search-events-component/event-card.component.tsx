import React from 'react';
import { makeStyles, createStyles, Theme, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import { SocialEvent } from '../../../models/Event';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 345,
            padding: 30,
        },
        media: {
            height: 140,
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
    }),
);

interface EventCardComponentProps {
    socialEvent: SocialEvent;
}

export const EventCardComponent: React.FC<EventCardComponentProps> = ({ socialEvent }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} id="event-card">
            <CardActionArea>
                <CardMedia
                    className={classes.media}
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
            <CardActions>
                <Button size="small" color="primary">
                    Join
            </Button>
                <Button size="small" color="primary">
                    Learn More
            </Button>
            </CardActions>
        </Card>
    )
}