import React from "react";
import { HostingComponent } from "./sub-components/hosting.component";
import { AttendingComponent } from "./sub-components/attending.component";
import { CreateEventComponent } from "./sub-components/create-event.component";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button } from "@material-ui/core";
import './my-event.component.css'



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
export const MyEventComponent: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
      <Grid container spacing={3}id='grid-layout'>
        <Grid item xs={12}>
          <Paper className={classes.paper} id ='event-pic' />
        </Grid>
        <section id = 'button-layout'>
        <Grid item xs={6}id='button-margin'>
         <CreateEventComponent />
        </Grid>
        <Grid item xs={6}id='button-margin'>
         <Button variant="outlined" color="primary">
                Open form dialog
            </Button>
        </Grid>
        </section>
        <section id='table-layout'>
        <Grid item xs={6}id ='host-container'>
          <HostingComponent />
        </Grid>
        <Grid item xs={6} id= 'attend-container'>
         <AttendingComponent />
        </Grid>
        </section>
      </Grid>
      </div>
    </React.Fragment>
  );
};
