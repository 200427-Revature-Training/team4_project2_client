import React, { useState, useEffect } from 'react';
import { Theme, createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import * as feedRemote from '../../../remotes/feed.remote';
import { User } from '../../../models/User';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        details: {
            paddingLeft: 20,
            display: 'flex',
            minWidth: 600,

        },
        content: {

        },
        cover: {

        },
        controls: {

        },
        playIcon: {
        },
    }),
);

interface FeedProfileComponentProps {
    userId: number;
}

export const FeedProfileComponent: React.FC<FeedProfileComponentProps> = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const [userInfo, setUserInfo] = useState<User>();


    useEffect(() => {
        loadUserInfo();
    }, [])

    const loadUserInfo = async () => {
        console.log(props.userId);
        const retrievedUserInfo: any = await feedRemote.getUserByUserId(props.userId)
        console.log(retrievedUserInfo.data);
        setUserInfo(retrievedUserInfo.data);
    }

    return (
        <Card className={classes.root} id="containerS">
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <AccountCircleIcon fontSize="large" />
                    <Typography component="h5" variant="h5">
                        {userInfo?.username}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {userInfo?.email}
                    </Typography>
                </CardContent>
            </div>
            <CardMedia
                className={classes.cover}
                image="/static/images/cards/live-from-space.jpg"
                title="Live from space album cover"
            />
        </Card>
    );
}