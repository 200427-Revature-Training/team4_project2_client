import React from 'react';
import { SocialEvent } from '../../../models/Event';
import { EventCardComponent } from './event-card.component';
import { Grid, Container } from '@material-ui/core';


interface JoinEventComponentProps {
    setView: (str: 'SEARCHED_LIST' | 'CATEGORY_LIST' | 'JOIN_LIST') => void;
    socialEvents: SocialEvent[];
    socialEventType: string;
    setSocialEventType: (str: 'OUTDOORS' | 'ARTS_CRAFTS' | 'BOARD_VIDEO_GAMES' | 'EXERCISE' |
        'CONVENTIONS' | 'TECH' | 'TALK_DISCUSSION' | 'OTHER' | '') => void;
    getEvent: (eventId: number) => void;
    userId: number;
}

export const JoinEventComponent: React.FC<JoinEventComponentProps> = (props) => {
    const renderEventCardComponents = () => {
        // props.setSocialEvents(retrievedSocialEvents);
            return props.socialEvents.map(socialEvent => {
                return (
                    <Grid item xl={3} sm={3}>
                        <EventCardComponent key={socialEvent.id} socialEvent={socialEvent} 
                                            getEvent={props.getEvent} userId={props.userId}
                        ></EventCardComponent>
                    </Grid>)
            })
    }

    return (
        <div>
            <Container maxWidth="lg" disableGutters>
                <section>
                    <Grid container direction="row" spacing={4} alignItems="flex-start">
                        {renderEventCardComponents()}
                    </Grid>
                </section>
            </Container>
        </div>
    );
}