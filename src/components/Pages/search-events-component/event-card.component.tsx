import React from 'react';
import { makeStyles, createStyles, Theme, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import { SocialEvent } from '../../../models/Event';


const useStyles = makeStyles({
    containerk: {
        display: 'flex',
        paddingTop: 40,
    },
    rootk: {
        maxWidth: 345,
        maxHeight:500,
        margin: 'auto',
    },
    mediak: {
        height: 140,
        minWidth: 300,
    },
});

interface EventCardComponentProps {
    socialEvent: SocialEvent;
}

export const EventCardComponent: React.FC<EventCardComponentProps> = ({ socialEvent }) => {
    const classes = useStyles();

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