import React from 'react'
import { Typography, makeStyles, createStyles,
    Theme, Divider } from '@material-ui/core';
import {} from '@material-ui/icons';
import { AttendingEventComponent } from './user-attending-event.component';
import { HostingEventComponent } from './user-hosting-event.component';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        roo: {
            color: 'black'
        },
        divider: {
            margin: theme.spacing(2, 0)
        }
    })

);

export const UserEventComponent: React.FC = () => {

    const classes = useStyles();

    return (
        <React.Fragment>
            <div>
                <Typography variant="h3">
                    My Event Page
                </Typography>
                <div>
                    <Divider className={classes.divider} />
                    <AttendingEventComponent />
                    <Divider className={classes.divider} />
                    <HostingEventComponent />
                </div>
            </div>
        </React.Fragment>
    );
};