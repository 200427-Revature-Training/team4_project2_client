import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { TextField, FormControl, InputLabel, Select, MenuItem, createStyles, Theme, Grid } from '@material-ui/core';
import { SocialEvent } from '../../models/Event';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 345,
            padding: 30,
        },
        media: {
            height: 140,
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
    }),
);

export const JoinEventComponent: React.FC = () => {
    const classes = useStyles();
    const [socialEvents, setSocialEvents] = useState<SocialEvent[]>([]);
    const [time, setTime] = React.useState('');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setTime(event.target.value as string);
    }

    return (
        <div>
            <form noValidate autoComplete="off">
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Date of Event</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={time}
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Next Ten Days</MenuItem>
                        <MenuItem value={20}>Next Twenty Days</MenuItem>
                        <MenuItem value={30}>Next Thirty Days</MenuItem>
                    </Select>
                </FormControl>
            </form>

            <section>
                <Typography variant="h2" component="h2">Join an Event</Typography>
                <Grid container direction="row" spacing={9} alignItems="flex-start">
                    {/* {socialEvents.map(e => {
                        return (
                            <Grid key={e.id} item xl={3} sm={3}>
                                <EventCardComponent title={e.title} image={e.img} price={e.price} startTime={e.startTime} maxPeople={e.maxPeople} description={e.description} />
                            </Grid>
                        )
                    })} */}
                </Grid>
            </section>
        </div>
    );
}