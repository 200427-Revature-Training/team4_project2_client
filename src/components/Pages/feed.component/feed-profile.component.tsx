import React from 'react';
import { Theme, createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';


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

export const FeedProfileComponent: React.FC = () => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        PROFILE HEADLINE
            </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        USERNAME
            </Typography>
                </CardContent>
                <div className={classes.controls}>
                </div>
            </div>
            <CardMedia
                className={classes.cover}
                image="/static/images/cards/live-from-space.jpg"
                title="Live from space album cover"
            />
        </Card>
    );
}