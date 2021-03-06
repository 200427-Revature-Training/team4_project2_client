import React, { useState, useEffect } from 'react';
import { makeStyles, Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import { PostFeedBoxComponent } from './post-feed-box.component';
import { Post } from '../../../models/Post';
import * as eventRemote from '../../../remotes/event.remote';


const useStyles = makeStyles({
    rootk: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        paddingLeft: 20,
        margin: "auto"
    },
    buttonk: {
        fontSize: 30,
        maxHeight: 10,
        padding: 50,
    },
    boxk: {
        display: "flex",
        flexDirection: "column",
        maxWidth: 1200,
    },

});

export const childViews = {
    myPosts: 'MY_POSTS',
    myLikePosts: 'MY_LIKE_POSTS',
    myFollowPosts: 'MY_FOLLOW_POSTS',
    newPosts: "NEW_POSTS"
};

interface PostFeedComponentProps {
    userId: number;
    getEvent: (eventId: number) => void;
}

export const PostFeedComponent: React.FC<PostFeedComponentProps> = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const [Posts, setPosts] = useState<Post[]>([]);
    const [Comments, setComments] = useState<Comment[]>([]);
    // const [myFollowPosts, setMyFollowPosts] = useState<Post[]>([]);
    // const [newPosts, setNewPosts] = useState<Post[]>([]);
    // const [myLikePosts, setMyLikePosts] = useState<Post[]>([]);
    const [view, setView] = useState<'MY_POSTS' | 'MY_FOLLOW_POSTS' | 'MY_LIKE_POSTS' | 'NEW_POSTS'>('MY_POSTS');

    useEffect(() => {
        if (Posts.length == 0) {
            setViewAndFeed('MY_POSTS');
        }
    }, [])

    const setViewAndFeed = async (e: any) => {
        let retrievedPosts: Post[];
        if(e === 'MY_POSTS') {
            retrievedPosts = await eventRemote.getPostsByUserId(props.userId);
            setPosts(retrievedPosts);
        } else if (e === 'NEW_POSTS') {
            retrievedPosts = await eventRemote.getNewPosts(props.userId);
            setPosts(retrievedPosts);
        } 
        setView(e);
    }

    const renderPostBoxComponents = () => {
        switch (view) {
            case childViews.myPosts:
                return Posts.map(post => {
                    return (
                        <div >
                            <PostFeedBoxComponent userId={props.userId} key={post.id} post={post} getEvent={props.getEvent} view={view}  />
                        </div>
                    )
                })
            case childViews.myFollowPosts:
                return Posts.map(post => {
                    return (
                        <PostFeedBoxComponent userId={props.userId} key={post.id} post={post} getEvent={props.getEvent} view={view}  />
                    )
                })
            case childViews.myLikePosts:
                return Posts.map(post => {
                    return (
                        <PostFeedBoxComponent userId={props.userId} key={post.id} post={post} getEvent={props.getEvent}  view={view} />
                    )
                })
            case childViews.newPosts:
                return Posts.map(post => {
                    return (
                        <PostFeedBoxComponent userId={props.userId} key={post.id} post={post} getEvent={props.getEvent} view={view}  />
                    )
                })
        }
    }

    return (
        <div className={classes.rootk} >
            <section>
                <Button className={classes.buttonk} color="inherit"
                    onClick={(e) => setViewAndFeed('MY_POSTS')}>
                    My Posts
                </Button>
                <Button className={classes.buttonk} color="inherit"
                    onClick={() => setView('MY_FOLLOW_POSTS')}>
                    My Comments
                </Button>
                <Button className={classes.buttonk} color="inherit"
                    onClick={() => setView('MY_LIKE_POSTS')}>
                    Liked Posts
            </Button>
                <Button className={classes.buttonk} color="inherit"
                    onClick={() => setViewAndFeed('NEW_POSTS')}>
                    New Posts
            </Button>
            </section>
            <section className={classes.boxk} >
                {renderPostBoxComponents()}
            </section>
        </div>
    )
}