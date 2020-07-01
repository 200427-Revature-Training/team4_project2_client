import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { PhotoCamera } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
  }),
);

export const CreateEventComponent: React.FC= ()=>{
const classes = useStyles();
const classe = useStyle();
const [open, setOpen] = React.useState(false);
const handleClickOpen = () => {
    setOpen(true);
};
const handleClose = () => {
    setOpen(false);
};

    return (
    <React.Fragment>
        <div className={classes.root}>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Create An Event
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Create Event</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We will send updates
                    occasionally.
                </DialogContentText>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                            required
                            id="outlined-full-width"
                            label="Name of Event"
                            style={{ margin: 8 }}
                            helperText="ex. Pokemon Tournament"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                            required
                            id="outlined-full-width"
                            label="Start Date"
                            style={{ margin:0 }}
                            fullWidth
                            type='Date'
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                             }}
                            variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                            required
                            id="outlined-full-width"
                            label="End Date"
                            style={{ margin:0 }}
                            fullWidth
                            type='Date'
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                             }}
                            variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <input
                            accept="image/*"
                            className={classe.input}
                            id="contained-button-file"
                            multiple
                            type="file"
                            />
                            <label htmlFor="contained-button-file">
                                <Button variant="outlined" color="primary" component="span">
                                Upload
                                </Button>
                            </label>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            id="outlined-full-width"
                            label="Description of Event"
                            style={{ margin: 0}}
                            helperText="ex. Come and Join...."
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            id="outlined-full-width"
                            label="Address"
                            style={{ margin: 0}}
                            helperText="ex. 1600 Broadway New York, NY 10036"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                            required
                            id="outlined-full-width"
                            label="Price"
                            style={{ margin: 0}}
                            type='number'
                            helperText="ex. 200.00"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                min: "0",
                              }}
                            variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                            required
                            id="outlined-full-width"
                            label="Capacity"
                            style={{ margin: 0}}
                            type='number'
                            helperText="ex. 10"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                min: "0",
                              }}
                            variant="outlined"
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleClose} color="primary">
                    Submit
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    </React.Fragment>
    )
}