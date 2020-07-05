import React, { useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { MenuItem, Select, InputLabel, FormControl, Button, Container, Card } from '@material-ui/core';
import * as feedRemote from '../../../remotes/feed.remote';
import * as eventRemote from '../../../remotes/event.remote';
import { SocialEvent } from '../../../models/Event';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '20ch',
                padding: 10,
            },
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: '20ch',
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        buttonRoot: {
            display: "flex",
        },
        buttonk: {

            fontSize: 20,
        }
    }),
);

interface FeedHostComponentProps {
    userId: number;
    setHostSocialEvents: (socialEvents: SocialEvent[]) => void;
    setAttendSocialEvents: (socialEvents: SocialEvent[]) => void;
}

export const FeedHostComponent: React.FC<FeedHostComponentProps> = (props) => {
    const classes = useStyles();
    const [socialEventTypeId, setSocialEventTypeId] = React.useState(0);
    const [socialEventTitle, setSocialEventTitle] = React.useState('');
    const [socialEventDescription, setSocialEventDescription] = React.useState('');
    const [socialEventMaxPeople, setSocialEventMaxPeople] = React.useState(0);
    const [socialEventPrice, setSocialEventPrice] = React.useState(0);
    const [socialEventStartDate, setSocialEventStartDate] = React.useState("");

    useEffect(() => {
        loadHostEvents();
        loadAttendEvents();
    }, [])

    const loadHostEvents = async () => {
        const retrievedSocialEvents = await eventRemote.getHostSocialEventByUserId(props.userId)
        props.setHostSocialEvents(retrievedSocialEvents);
    }

    const loadAttendEvents = async () => {
        const retrievedSocialEvents = await feedRemote.getUserByUserId(props.userId)
        props.setAttendSocialEvents(retrievedSocialEvents.data.events);
    }


    const submitHostEvent = async () => {
        const payload = {
            description: socialEventDescription,
            title: socialEventTitle,
            price: socialEventPrice,
            maxPeople: socialEventMaxPeople,
            startTime: socialEventStartDate,
            eventType: {id: socialEventTypeId},
            user: {id: props.userId}
        }

        try {
            feedRemote.hostNewSocialEvent(payload);
            await setInformation();
        } catch {
            alert("Your event could not be hosted at this time")
        }
    }

    const setInformation = async () => {
        setSocialEventTypeId(0);
        setSocialEventDescription("");
        setSocialEventTitle("");
        setSocialEventPrice(0);
        setSocialEventMaxPeople(0);
        setSocialEventStartDate("");
    }

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSocialEventTypeId(event.target.value as number);
    };

    return (
        <React.Fragment>
            <div className={classes.buttonRoot} >
                <Button className={classes.buttonk} color="inherit"
                    onClick={() => submitHostEvent()}>
                    Host New Event
                </Button>
            </div>
            <form className={classes.root} noValidate autoComplete="off" >
                <TextField id="standard-basic" label="Title" value={socialEventTitle} onChange={
                    (e) => setSocialEventTitle(e.target.value)} />
                <TextField id="standard-basic" label="Description" value={socialEventDescription} onChange={
                    (e) => setSocialEventDescription(e.target.value)} />
                <TextField id="standard-basic" type="number" label="Max Attendees" value={socialEventMaxPeople} onChange={
                    (e) => setSocialEventMaxPeople(+e.target.value)} />
            </form>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="Price" value={socialEventPrice} onChange={
                    (e) => setSocialEventPrice(+e.target.value)} />
                <TextField
                    id="date"
                    label="Start Time"
                    type="date"
                    defaultValue="2017-05-24"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }} value={socialEventStartDate} onChange={
                        (e) => setSocialEventStartDate(e.target.value)} />
                <FormControl className={classes.formControl} >
                    <InputLabel id="demo-simple-select-label" >Event Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={socialEventTypeId} onChange={handleChange}
                    >
                        <MenuItem value={1}>Outdoor Activity</MenuItem>
                        <MenuItem value={2}>Arts and Crafts</MenuItem>
                        <MenuItem value={3}>Board and Video Games</MenuItem>
                        <MenuItem value={4}>Exercise Activity</MenuItem>
                        <MenuItem value={5}>Convention/Exhibiton</MenuItem>
                        <MenuItem value={6}>Technology</MenuItem>
                        <MenuItem value={7}>Talk and Discussion</MenuItem>
                        <MenuItem value={8}>Other</MenuItem>
                    </Select>
                </FormControl>
            </form>
        </React.Fragment>
    );
}