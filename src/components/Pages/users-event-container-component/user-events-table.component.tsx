import React from 'react'
import { makeStyles, Theme, createStyles, Grid, Paper } from '@material-ui/core';
import { TableOfEventsComponent } from './event-table.component';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      fontSize: 35
    },
  }),
);
export const EventTableComponent: React.FC = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={6}>
            <Paper className={classes.paper}>
                Events I Am Hosting
            </ Paper>
            <Paper className={classes.paper}>
                <TableOfEventsComponent />
            </Paper>
            </Grid>
            <Grid item xs={6}>
            <Paper className={classes.paper}>
                Events I Am Attending
            </ Paper>
            <Paper className={classes.paper}>
                <TableOfEventsComponent />
            </Paper>
            </Grid>
        </Grid>
        </div>
    );
};