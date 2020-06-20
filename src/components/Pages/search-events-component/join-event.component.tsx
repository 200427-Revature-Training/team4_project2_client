import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { TextField, FormControl, InputLabel, Select, MenuItem, createStyles, Theme, Grid } from '@material-ui/core';
import { SocialEvent } from '../../../models/Event';
import { EventCardComponent } from './event-card.component';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 345,
            padding: 30,
        },
        media: {
            height: 140,
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
    }),
);

interface JoinEventComponentProps {
    setView: (str: 'SEARCHED_LIST' | 'CATEGORY_LIST' | 'JOIN_LIST') => void;
    socialEvents: SocialEvent[];
    socialEventType: string;
    setSocialEventType: (str: 'OUTDOORS' | 'ARTS_CRAFTS' | 'BOARD_VIDEO_GAMES' | 'EXERCISE' |
                            'CONVENTIONS' | 'MOVIES_TV' | 'TALK_DISCUSSION' | 'OTHER' | '') => void;
}

export const JoinEventComponent: React.FC<JoinEventComponentProps> = (props) => {

    const renderEventCardComponents = () => {
        return props.socialEvents.map(socialEvent => {
            return (<EventCardComponent key={socialEvent.id} socialEvent={socialEvent}></EventCardComponent>)
        })
    }

    return (
        <div>
            <h2>{props.socialEventType}</h2>
            <section>
            {renderEventCardComponents()}
            </section>
        </div>
    );
}