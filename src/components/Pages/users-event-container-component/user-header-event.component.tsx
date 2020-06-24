import React from 'react'
import { makeStyles,
    Grid, Typography,
    Container} from '@material-ui/core';
import { RedirectModalComponent } from '../../sub-components/redirect-modal-component';
import { CreateEventModal } from '../create-event-modal.component';
import { FallbackAvatars } from '../../sub-components/user-avatar.component';

/*
    - Header Component for display Image
    - Tabs
        - Expansion Tables
        - Name of Event
            - Information
                - Description?
                - Location
                - Date
                - Link to Event Page Itself
        - Expansion Icon

*/

const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
  }));

export const UserHeaderEventComponent: React.FC = () => {

    const classes = useStyles();

    return (
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <FallbackAvatars />
            <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
              "User Profile"
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <CreateEventModal />
                </Grid>
                <Grid item>
                  <RedirectModalComponent />
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
    );
};