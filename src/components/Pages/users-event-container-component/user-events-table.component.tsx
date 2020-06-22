import React from 'react'
import { makeStyles, Theme, createStyles, Grid, Paper } from '@material-ui/core';

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
export const EventTableComponent: React.FC = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
            <Paper className={classes.paper}>xs=12</Paper>
            </Grid>
            <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
            <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
        </Grid>
        </div>
    );
};