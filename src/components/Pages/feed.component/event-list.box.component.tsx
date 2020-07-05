import React, { useEffect } from "react";
import { List, ListItem, makeStyles, Theme, createStyles, Typography } from "@material-ui/core";
import { SocialEvent } from "../../../models/Event";
import { useHistory } from "react-router";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        rootk: {
            maxWidth: 300,
            backgroundColor: theme.palette.background.paper,
            color: "teal",
            fontSize: 20,
        },
        listK: {
            alignContent: "center"
        }
    }),
);

interface EventListBoxComponentProps {
    hostSocialEvents: SocialEvent[];
    attendSocialEvents: SocialEvent[];
    getEvent: (eventId: number) => void;
}

export const EventListBoxComponent: React.FC<EventListBoxComponentProps> = (props) => {
    const classes = useStyles();
    const history = useHistory();

    const redirectToEventForum = (socialEventId: any) => {
        props.getEvent(socialEventId);
        history.push('/forum');
    }

    const renderHostListComponent = () => {
        return props.hostSocialEvents.map(socialEvent => {
            return (
                <ListItem button onClick={() => redirectToEventForum(socialEvent.id)}>
                    {socialEvent.title}
                </ListItem>
            )
        })
    }

    const renderAttendListComponent = () => {
        return props.attendSocialEvents.map(socialEvent => {
            return (
                <ListItem button onClick={() => redirectToEventForum(socialEvent.id)} >
                    {socialEvent.title}
                </ListItem>
            )
        })
    }

    return (
        <React.Fragment>
            <div className={classes.rootk} >
                <Typography
                    gutterBottom
                    variant="h4"
                    component="h2"
                    id="text-display"
                    align="left"
                >HOSTED EVENTS
                </Typography>
                <List component="nav" aria-label="main mailbox folders" >
                    {renderHostListComponent()}
                </List>
                <br/>
                <br/>
                <Typography
                    gutterBottom
                    variant="h4"
                    component="h2"
                    id="text-display"
                    align="left"
                >ATTENDING EVENTS</Typography>
                <List component="nav" aria-label="main mailbox folders" >
                    {renderAttendListComponent()}
                </List>
            </div>
        </React.Fragment>
    );
};
