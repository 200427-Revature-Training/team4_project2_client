import React, { useState } from 'react';
import { makeStyles, createStyles, Theme, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, Popover } from '@material-ui/core';
import { SocialEvent } from '../../../models/Event';
import { useHistory } from 'react-router';
import { Post } from '../../../models/Post';

const useStyles = makeStyles({
    root: {
        minWidth: 600,
        display: "flex",
        flexGrow: 1,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

interface PostFeedBoxComponentProps {
    post: Post;
}

export const PostFeedBoxComponent: React.FC<PostFeedBoxComponentProps> = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const bull = <span className={classes.bullet}>•</span>;


    return (
        <Card className={classes.root}>
            <CardActionArea>
            <CardContent>
                <Typography variant="h5" component="h2">
                    be{bull}nev{bull}o{bull}lent
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
    )
}