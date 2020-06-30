import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { MenuItem, Select, InputLabel, FormControl, Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: '25ch',
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

export const FeedHostComponent: React.FC = () => {
    const classes = useStyles();
    const [socialEventType, setSocialEventType] = React.useState('');

    const submitHostEvent = () => {
        
    }

    return (
        <React.Fragment>
            <div className={classes.buttonRoot}>
                <Button className={classes.buttonk} color="inherit"
                    onClick={() => submitHostEvent()}>
                    Host New Event
                </Button>
            </div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="Title" />
                <TextField id="standard-basic" label="Description" />
                <TextField id="standard-basic" type="number" label="Max Attendees" />
            </form>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="Price" />
                <TextField
                    id="date"
                    label="Start Time"
                    type="date"
                    defaultValue="2017-05-24"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }} />
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Event Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={socialEventType}
                    // onChange={handleChange}
                    >
                        <MenuItem value={'outdoors'}>Outdoor Activity</MenuItem>
                        <MenuItem value={'arts'}>Arts and Crafts</MenuItem>
                        <MenuItem value={'games'}>Board and Video Games</MenuItem>
                        <MenuItem value={'exercise'}>Exercise Activity</MenuItem>
                        <MenuItem value={'conventions'}>Convention/Exhibiton</MenuItem>
                        <MenuItem value={'technology'}>Technology</MenuItem>
                        <MenuItem value={'talk'}>Talk and Discussion</MenuItem>
                        <MenuItem value={'other'}>Other</MenuItem>
                    </Select>
                </FormControl>
            </form>
        </React.Fragment>
    );
}