import React, { useState, useEffect } from 'react';
import { Theme, createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import * as feedRemote from '../../../remotes/feed.remote';
import { User } from '../../../models/User';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { CardActionArea } from '@material-ui/core';
import { green, teal } from '@material-ui/core/colors';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: "row",
            flexGrow: 1
        },
        details: {
            padding: 40,
            minWidth: 1000,
            display: "flex",
            
        },
        subDetails: {
            display: "flex",
            flexGrow: 1
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
        const retrievedUserInfo: any = await feedRemote.getUserByUserId(props.userId)
        setUserInfo(retrievedUserInfo.data);
    }

    return (
        <Card className={classes.root} id="containerS">
            <CardActionArea  >
                <CardContent className={classes.details}>
                    <AccountCircleIcon  style={{ fontSize: 60, color: teal[500] }} />
                    <Typography component="h5" variant="h3"style={{ color: teal[500] }} className={classes.subDetails}>
                        {userInfo?.username} {userInfo?.email}
                    </Typography>
                    <Typography  color="textSecondary" component="h5" variant="h3" className={classes.subDetails}>
                    </Typography> 
                </CardContent>
            </CardActionArea>
        </Card>
    );
}