import React, { useState, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { SocialEvent } from '../../../models/Event';
import * as eventRemote from '../../../remotes/event.remote';
import { EventListBoxComponent } from './event-list.box.component';
import { PostFeedComponent } from './post-feed.component';
import { FeedProfileComponent } from './feed-profile.component';
import { FeedHostComponent } from './feed-host-event.component';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        rootk: {
            fontSize: 20,
            display: "flex",
            paddingLeft: 70,
        },
        fragmentk: {
            paddingLeft: 40,
            flexGrow:1,
        },
    }),
);

const userId = 1;


export const MainFeedComponent: React.FC = () => {
    const classes = useStyles();
    const [hostSocialEvents, setHostSocialEvents] = useState<SocialEvent[]>([]);
    const [attendSocialEvents, setAttendSocialEvents] = useState<SocialEvent[]>([]);


    useEffect(() => {
        loadHostEvents();
        loadAttendEvents();
    }, [])

    const loadHostEvents = async () => {
        const retrievedSocialEvents = await eventRemote.getHostSocialEventByUserId(userId)
        setHostSocialEvents(retrievedSocialEvents);
    }

    const loadAttendEvents = async () => {
        const retrievedSocialEvents = await eventRemote.getAttendSocialEventByUserId(userId)
        setAttendSocialEvents(retrievedSocialEvents);
    }

    return (
        <React.Fragment>
            <section className={classes.rootk}>
                <FeedProfileComponent />
                <div className={classes.fragmentk}>
                <FeedHostComponent />
                </div>
            </section>
            <section className={classes.fragmentk}>
                <EventListBoxComponent hostSocialEvents={hostSocialEvents} attendSocialEvents={attendSocialEvents} />
                <PostFeedComponent />
            </section>
        </React.Fragment>
    );
}