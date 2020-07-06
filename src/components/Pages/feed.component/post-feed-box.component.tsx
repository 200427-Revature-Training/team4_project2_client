import React, { useState } from 'react';
import { makeStyles, createStyles, Theme, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, Popover } from '@material-ui/core';
import { useHistory } from 'react-router';
import GradeRoundedIcon from '@material-ui/icons/GradeRounded';
import "./feed.component.css";


const useStyles = makeStyles({
    rootS: {
        minWidth: 1000,
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
    view: String;
}

export const PostFeedBoxComponent: React.FC<PostFeedBoxComponentProps> = (props) => {
    const classes = useStyles();
    const history = useHistory();
    let id;
    let username;
    let content;
    let title;

    const handleRedirect = (e: number) => {
        props.getEvent(e);
        history.push('/forum');
    }

    if (props.view === 'MY_POSTS') {
        id = 'containerN'
        username = props.post.user.username;
        content = props.post.postContent;
        title = props.post.event.title
        
    } else if (props.view === 'NEW_POSTS') {
        id = 'containerO'
        username = props.post.user.username;
        content = props.post.postContent;
        title = props.post.event.title
    }
    //  | 'MY_FOLLOW_POSTS' | 'MY_LIKE_POSTS' | 'NEW_POSTS')

    return (
        <React.Fragment>
            <br />
        <Card className={classes.rootS} id={id}>
            <CardActionArea className={classes.root2} onClick={() => handleRedirect(props.post.event.id)}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        <GradeRoundedIcon />
                        {username}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {content}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        <br />
        </React.Fragment>
    )
}