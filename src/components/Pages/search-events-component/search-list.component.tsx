import React from 'react';
import { SocialEvent } from '../../../models/Event';
import { useStyles } from '@material-ui/pickers/views/Calendar/SlideTransition';
import { EventCardComponent } from './event-card.component';


interface SearchListComponentProps {
    setView: (str: 'SEARCHED_LIST' | 'CATEGORY_LIST' | 'JOIN_LIST') => void;
    socialEvents: SocialEvent[];
    inputSocialEventKey: string;
}

export const SearchListComponent: React.FC<SearchListComponentProps> = (props) => {
    const classes = useStyles();
    const renderEventCardComponents =  () => {
        // props.setSocialEvents(retrievedSocialEvents);
        return props.socialEvents.map(socialEvent => {
            return (<EventCardComponent key={socialEvent.id} socialEvent={socialEvent}></EventCardComponent>)
        })
    }

    return (
        <div>
            <h2>{props.inputSocialEventKey}</h2>
            <section>
            {renderEventCardComponents()}
            </section>
        </div>
    );
}