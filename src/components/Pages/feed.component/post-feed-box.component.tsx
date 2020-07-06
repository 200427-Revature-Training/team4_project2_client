import React, { useState } from 'react';
import { makeStyles, createStyles, Theme, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, Popover } from '@material-ui/core';
import { useHistory } from 'react-router';
import GradeRoundedIcon from '@material-ui/icons/GradeRounded';
import "./feed.component.css";


const useStyles = makeStyles({
    rootS: {
        minWidth: 600,
        display: "flex",
        flexGrow: 1,
        margin: "auto",
        padding: 0
    },
    root2: {
        padding:30,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

//!Change Post Model to return postCotent
interface PostFeedBoxComponentProps {
    post: any;
    userId: number;
    getEvent: (eventId: number) => void; 
}

export const PostFeedBoxComponent: React.FC<PostFeedBoxComponentProps> = (props) => {
    const classes = useStyles();
    const history = useHistory();

    const handleRedirect = (e: number) => {
        props.getEvent(e);
        history.push('/forum');
    }

    return (
        <React.Fragment>
            <br />
        <Card className={classes.rootS} id="containerN">
            <CardActionArea className={classes.root2} onClick={() => handleRedirect(props.post.event.id)}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        <GradeRoundedIcon />
                        {props.post.user.username}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {props.post.postContent}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {props.post.event.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        <br />
        </React.Fragment>
    )
}