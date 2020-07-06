import React, { useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { MenuItem, Select, InputLabel, FormControl, Button, Modal, Backdrop, Fade } from '@material-ui/core';
import * as feedRemote from '../../../remotes/feed.remote';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                padding: 10,
                display: "flex",
                flexDirection: "row",
            },
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
            },
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
        formControl: {
            margin: theme.spacing(1),
        },
        buttonRoot: {
            display: "flex",
            position: "inherit",
        },
        buttonk: {
            fontSize: 30,
        },
        modal: {
            display: 'flex',
            justifyContent: 'flex-end',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(5, 5, 5),
            color: "inherit",
            maxWidth: 300,
        },
        resize: {
            fontSize: 20
        }
    }),
);

interface FeedHostComponentProps {
    userId: number;
}

export const FeedHostComponent: React.FC<FeedHostComponentProps> = (props) => {
    const classes = useStyles();
    const [socialEventTypeId, setSocialEventTypeId] = React.useState(0);
    const [socialEventTitle, setSocialEventTitle] = React.useState('');
    const [socialEventDescription, setSocialEventDescription] = React.useState('');
    const [socialEventMaxPeople, setSocialEventMaxPeople] = React.useState(0);
    const [socialEventPrice, setSocialEventPrice] = React.useState(0);
    const [socialEventStartDate, setSocialEventStartDate] = React.useState("");
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const submitHostEvent = async () => {
        const payload = {
            description: socialEventDescription,
            title: socialEventTitle,
            price: socialEventPrice,
            maxPeople: socialEventMaxPeople,
            startTime: socialEventStartDate,
            eventType: { id: socialEventTypeId },
            user: { id: props.userId }
        }

        try {
            feedRemote.hostNewSocialEvent(payload);
            await setInformation();
            window.location.reload();
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
            <div>
                <div className={classes.buttonRoot} >
                    <Button className={classes.buttonk} color="inherit" type="button" onClick={handleOpen}>Host Event</Button>{' '}
                </div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <div className={classes.paper} >
                            <form className={classes.root} noValidate autoComplete="off" >
                                <TextField id="standard-basic" label="Title" value={socialEventTitle} onChange={
                                    (e) => setSocialEventTitle(e.target.value)} InputProps={{ classes: { input: classes.resize } }} />
                                <TextField id="standard-multiline-static"
                                    label="Description"
                                    multiline
                                    rowsMax={4} value={socialEventDescription} onChange={
                                        (e) => setSocialEventDescription(e.target.value)} InputProps={{ classes: { input: classes.resize } }} />
                            </form>
                            <form className={classes.root} noValidate autoComplete="off" >
                                <TextField id="standard-basic" type="number" label="Max Attendees" value={socialEventMaxPeople} onChange={
                                    (e) => setSocialEventMaxPeople(+e.target.value)} InputProps={{ classes: { input: classes.resize } }} />
                                <TextField size="medium" id="standard-basic" label="Price" value={socialEventPrice} onChange={
                                    (e) => setSocialEventPrice(+e.target.value)} InputProps={{ classes: { input: classes.resize } }} />
                            </form>
                            <form className={classes.root} noValidate autoComplete="off">
                                <TextField
                                    id="date"
                                    label="Start Time"
                                    type="date"
                                    defaultValue="2017-05-24"
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }} value={socialEventStartDate} onChange={
                                        (e) => setSocialEventStartDate(e.target.value)} InputProps={{ classes: { input: classes.resize } }} />
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
                            <Button className={classes.buttonk} color="inherit"
                                onClick={() => submitHostEvent()}>
                                Host New Event
                </Button>
                        </div>
                    </Fade>
                </Modal>
            </div>
        </React.Fragment>
    );
}