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
import { findByLabelText } from '@testing-library/react';

const useStyles = makeStyles({
    container: {
        display: 'flex',
    },
    root: {
        maxWidth: 345,
        padding: 50,

    },
    media: {
        height: 140,
        minWidth: 300,
    },

});

export const SearchEventComponent: React.FC = () => {
    const classes = useStyles();

    return (
        <div>
            <form noValidate autoComplete="off">
                <TextField id="standard-basic" label="Search" />
            </form>

            <div className={classes.container}>
                <Card className={classes.root} id="event-card">
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Event Catgeory
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Event category description
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            explore
                    </Button>
                        <Button size="small" color="primary">
                            Learn More
                    </Button>
                    </CardActions>
                </Card>



                <Card className={classes.root} id="event-card">
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Event Catgeory
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Event category description
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            explore
                    </Button>
                        <Button size="small" color="primary">
                            Learn More
                    </Button>
                    </CardActions>
                </Card>

                <Card className={classes.root} id="event-card">
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Event Catgeory
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Event category description
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            explore
                    </Button>
                        <Button size="small" color="primary">
                            Learn More
                    </Button>
                    </CardActions>
                </Card>

                <Card className={classes.root} id="event-card">
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Event Catgeory
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Event category description
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            explore
                    </Button>
                        <Button size="small" color="primary">
                            Learn More
                    </Button>
                    </CardActions>
                </Card>
            </div>

            <div className={classes.container}>
                <Card className={classes.root} id="event-card">
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Event Catgeory
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Event category description
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            explore
                    </Button>
                        <Button size="small" color="primary">
                            Learn More
                    </Button>
                    </CardActions>
                </Card>



                <Card className={classes.root} id="event-card">
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Event Catgeory
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Event category description
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            explore
                    </Button>
                        <Button size="small" color="primary">
                            Learn More
                    </Button>
                    </CardActions>
                </Card>

                <Card className={classes.root} id="event-card">
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Event Catgeory
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Event category description
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            explore
                    </Button>
                        <Button size="small" color="primary">
                            Learn More
                    </Button>
                    </CardActions>
                </Card>

                <Card className={classes.root} id="event-card">
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Event Catgeory
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Event category description
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            explore
                    </Button>
                        <Button size="small" color="primary">
                            Learn More
                    </Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
}