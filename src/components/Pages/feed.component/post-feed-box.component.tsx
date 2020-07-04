import React, { useState } from 'react';
import { makeStyles, createStyles, Theme, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, Popover } from '@material-ui/core';
import { useHistory } from 'react-router';
import GradeRoundedIcon from '@material-ui/icons/GradeRounded';


const useStyles = makeStyles({
    root: {
        minWidth: 600,
        display: "flex",
        flexGrow: 1,
        margin: "auto",
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
}

export const PostFeedBoxComponent: React.FC<PostFeedBoxComponentProps> = (props) => {
    const classes = useStyles();
    const history = useHistory();

    console.log(props.post);

    return (
        <Card className={classes.root} >
            <CardActionArea className={classes.root2}>
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
    )
}