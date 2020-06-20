import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { TextField } from '@material-ui/core';
import { SocialEvent } from '../../../models/Event';


const useStyles = makeStyles({
    container: {
        display: 'flex',
        paddingTop: 40,
        
    },
    root: {
        maxWidth: 345,
        maxHeight:500,
        margin: 'auto',
        
        

    },
    media: {
        height: 140,
        minWidth: 300,
    },
});

interface CategoryListComponentProps {
    setView: (str: 'SEARCHED_LIST' | 'CATEGORY_LIST' | 'JOIN_LIST') => void;
    setSocialEventType: (str:'OUTDOORS' | 'ARTS_CRAFTS' | 'BOARD_VIDEO_GAMES' | 'EXERCISE' |
                            'CONVENTIONS' | 'MOVIES_TV' | 'TALK_DISCUSSION' | 'OTHER' | '') => void;
}

export const CategoryListComponent: React.FC<CategoryListComponentProps> = (props) => {
    const classes = useStyles();

    const setViewAndType = (e: any) => {
        props.setSocialEventType(e);
        props.setView('JOIN_LIST')
    }

    return (
        <div>
            <div className={classes.container}>
                <Card className={classes.root} id="event-card" onClick={() => setViewAndType('OUTDOORS')}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Outdoor Activities"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Outdoor Activities
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Event category description
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className={classes.root} id="event-card" onClick={() => setViewAndType('ARTS_CRAFTS')}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Arts and Crafts
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Event category description
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className={classes.root} id="event-card" onClick={() => setViewAndType('BOARD_VIDEO_GAMES')}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Board and Video Games
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Event category description
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className={classes.root} id="event-card" onClick={() => setViewAndType('EXERCISE')}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Exercise Activities
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Event category description
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
            <div className={classes.container}>
                <Card className={classes.root} id="event-card" onClick={() => setViewAndType('CONVENTIONS')}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Conventions
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Event category description
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className={classes.root} id="event-card" onClick={() => setViewAndType('MOVIES_TV')}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Movies and TV
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Event category description
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className={classes.root} id="event-card" onClick={() => setViewAndType('TALKS_DISCUSSIONS')}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Talks and Discussions
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Event category description
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className={classes.root} id="event-card" onClick={() => setViewAndType('OTHER')}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Other
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Event category description
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    )
}