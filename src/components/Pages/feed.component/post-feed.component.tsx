import React, { useState } from 'react';
import { makeStyles, createStyles, Theme, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, Popover } from '@material-ui/core';
import { SocialEvent } from '../../../models/Event';
import { useHistory } from 'react-router';
import { PostFeedBoxComponent } from './post-feed-box.component';
import { Post } from '../../../models/Post';
import * as eventRemote from '../../../remotes/event.remote';


const useStyles = makeStyles({
    rootk: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        paddingLeft: 130,
    },
    buttonk: {
        fontSize: 30,
        maxHeight: 10,
        padding: 50,
    },
    boxk: {
        display: "flex",
    },

});

//!get userd ID from local storage or cookie
const userId = 1;

export const childViews = {
    myPosts: 'MY_POSTS',
    myLikePosts: 'MY_LIKE_POSTS',
    myFollowPosts: 'MY_FOLLOW_POSTS',
    newPosts: "NEW_POSTS"
};

interface PostFeedComponentProps {
    socialEvent: SocialEvent;
}

export const PostFeedComponent: React.FC = () => {
    const classes = useStyles();
    const history = useHistory();
    const [Posts, setPosts] = useState<Post[]>([]);
    // const [myFollowPosts, setMyFollowPosts] = useState<Post[]>([]);
    // const [newPosts, setNewPosts] = useState<Post[]>([]);
    // const [myLikePosts, setMyLikePosts] = useState<Post[]>([]);
    const [view, setView] = useState<'MY_POSTS' | 'MY_FOLLOW_POSTS' | 'MY_LIKE_POSTS' | 'NEW_POSTS'>('MY_POSTS');


    const renderPostBoxComponents = () => {
        switch (view) {
            case childViews.myPosts:
                // let retrievedPosts = await eventRemote.getPostsByUserId(userId);
                // setPosts(retrievedPosts);
                return Posts.map(post => {
                    return (
                        <PostFeedBoxComponent key={post.id} post={post} />
                    )
                })
            case childViews.myFollowPosts:
                // retrievedPosts = await eventRemote.getPostsByFollowUserId(userId);
                // setPosts(retrievedPosts);
                return Posts.map(post => {
                    return (
                        <PostFeedBoxComponent key={post.id} post={post} />
                    )
                })
            case childViews.myLikePosts:
                // retrievedPosts = await eventRemote.getPostsByLikeUserId(userId);
                // setPosts(retrievedPosts);
                return Posts.map(post => {
                    return (
                        <PostFeedBoxComponent key={post.id} post={post} />
                    )
                })
            case childViews.newPosts:
                // retrievedPosts = await eventRemote.getAllPosts();
                // setPosts(retrievedPosts);
                return Posts.map(post => {
                    return (
                        <PostFeedBoxComponent key={post.id} post={post} />
                    )
                })
        }
    }

    return (
        <div className={classes.rootk}>
            <section>
                <Button className={classes.buttonk} color="inherit"
                    onClick={() => setView('MY_POSTS')}>
                    My Posts
                </Button>
                <Button className={classes.buttonk} color="inherit"
                    onClick={() => setView('MY_FOLLOW_POSTS')}>
                    Follow Posts
                </Button>
                <Button className={classes.buttonk} color="inherit"
                    onClick={() => setView('MY_LIKE_POSTS')}>
                    New Posts
            </Button>
                <Button className={classes.buttonk} color="inherit"
                    onClick={() => setView('NEW_POSTS')}>
                    Liked Posts
            </Button>
            </section>
            <section className={classes.boxk} >
                {renderPostBoxComponents()}
            </section>
        </div>
    )
}