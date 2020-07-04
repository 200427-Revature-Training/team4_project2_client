import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { SocialEvent } from '../../../models/Event';
import * as eventRemote from '../../../remotes/event.remote';


const useStyles = makeStyles({
    containerk: {
        display: 'flex',
        paddingTop: 40,
    },
    rootk: {
        maxWidth: 345,
        maxHeight:500,
        margin: 'auto',
    },
    mediak: {
        height: 140,
        minWidth: 300,
    },
});

interface CategoryListComponentProps {
    setView: (str: 'SEARCHED_LIST' | 'CATEGORY_LIST' | 'JOIN_LIST') => void;
    setSocialEventType: (str:'OUTDOORS' | 'ARTS_CRAFTS' | 'BOARD_VIDEO_GAMES' | 'EXERCISE' |
                            'CONVENTIONS' | 'TECH' | 'TALK_DISCUSSION' | 'OTHER' | '') => void;
    socialEvents: SocialEvent[];
    socialEventType: string;
    setSocialEvents: (DBSE: any) => void;}

export const CategoryListComponent: React.FC<CategoryListComponentProps> = (props) => {
    const classes = useStyles();

    const setViewAndType = async (e: any) => {
        // props.setSocialEventType(e);
        // const socialEventHolder = props.socialEventType
        // console.log(socialEventHolder)
        console.log(localStorage.getItem("accessToken"))
        const retrievedSocialEvents = await eventRemote.getSocialEventByTypeId(e)
        props.setSocialEvents(retrievedSocialEvents);
        props.setView('JOIN_LIST')
    }

    return (
        <div>
            <div className={classes.containerk}>
                <Card className={classes.rootk} id="event-card" onClick={() => setViewAndType(1)}>
                    <CardActionArea>
                        <CardMedia 
                            className={classes.mediak}
                            image={require ("../../../images/outdoor.jpeg")}
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
                <Card className={classes.rootk} id="event-card" onClick={() => setViewAndType(2)}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.mediak}
                            image={require ("../../../images/artscrafts.jpg")}
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
                <Card className={classes.rootk} id="event-card" onClick={() => setViewAndType(3)}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.mediak}
                            image={require ("../../../images/games.jpg")}
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
                <Card className={classes.rootk} id="event-card" onClick={() => setViewAndType(4)}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.mediak}
                            image={require ("../../../images/exercise.png")}
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
            <div className={classes.containerk}>
                <Card className={classes.rootk} id="event-card" onClick={() => setViewAndType(5)}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.mediak}
                            image={require ("../../../images/convention.jpg")}
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
                <Card className={classes.rootk} id="event-card" onClick={() => setViewAndType(6)}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.mediak}
                            image={require ("../../../images/tech.jpg")}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Technology
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Event category description
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className={classes.rootk} id="event-card" onClick={() => setViewAndType(7)}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.mediak}
                            image={require ("../../../images/talk.jpeg")}
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
                <Card className={classes.rootk} id="event-card" onClick={() => setViewAndType(8)}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.mediak}
                            image={require ("../../../images/other.jpg")}
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