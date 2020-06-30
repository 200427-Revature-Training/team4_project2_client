import React, { useState } from 'react';
import { TextField, Link, Typography, createStyles, makeStyles, Theme, Button } from '@material-ui/core';
import { SocialEvent } from '../../../models/Event';
import { JoinEventComponent } from './join-event.component';
import { CategoryListComponent } from './category-list.component';
import { SearchListComponent } from './search-list.component';
import * as eventRemote from '../../../remotes/event.remote';


export const childViews = {
    searchedList: 'SEARCHED_LIST',
    categoryList: 'CATEGORY_LIST',
    joinList: 'JOIN_LIST'
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: "auto",
                fontSize: 20,
            },
        },
    }),
);

interface SearchEventComponentProps {
getEvent: (eventId: number) => void;
}


export const SearchEventComponent: React.FC<SearchEventComponentProps> = (props) => {
    const classes = useStyles();
    const [view, setView] = useState<'SEARCHED_LIST' | 'CATEGORY_LIST' | 'JOIN_LIST'>('CATEGORY_LIST');
    const [socialEvents, setSocialEvents] = useState<SocialEvent[]>([]);
    const [inputSocialEventKey, setInputSocialEventKey] = useState('');
    const [socialEventType, setSocialEventType] = useState<'OUTDOORS' | 'ARTS_CRAFTS' | 'BOARD_VIDEO_GAMES' | 'EXERCISE' |
        'CONVENTIONS' | 'TECH' | 'TALK_DISCUSSION' | 'OTHER' | ''>('');

    const addSocialEvent = (socialEvent: SocialEvent) => {
        setSocialEvents([...socialEvents, socialEvent]);
    }

    const getCurrentView = () => {
        switch (view) {
            case childViews.categoryList: return <CategoryListComponent setView={setView} socialEvents={socialEvents}
                setSocialEventType={setSocialEventType} socialEventType={socialEventType} setSocialEvents={setSocialEvents} />;
            case childViews.joinList: return <JoinEventComponent setView={setView} socialEvents={socialEvents}
                socialEventType={socialEventType} setSocialEventType={setSocialEventType} />
            case childViews.searchedList: return <SearchListComponent setView={setView} socialEvents={socialEvents}
                inputSocialEventKey={inputSocialEventKey} />
            default: return <React.Fragment />
        }
    }

    const searchOnEnter = async (e: any) => {
        if (e.key === 'Enter') {
            // props.setSocialEventType(e);
            // const socialEventHolder = props.socialEventType
            // const retrievedSocialEvents = await eventRemote.getAllSocialEvents();
            //!Change this to retrieve all social Events and then filter them based on search
            //!Also create Sorting functions for these event cards. 
            const retrievedSocialEvents = await eventRemote.getSocialEventByTitle(inputSocialEventKey)
            console.log(retrievedSocialEvents);
            setSocialEvents(retrievedSocialEvents);
            setView('JOIN_LIST');
        }
    }

    return (
        <React.Fragment>
            
            <section className={classes.root}>
                <Button color="inherit" onClick={() => setView('CATEGORY_LIST')}>
                    Categories
            </Button>
            <TextField  id="standard-basic" label="Search" value={inputSocialEventKey}
                onChange={(e) => setInputSocialEventKey(e.target.value)} onKeyPress={(e) => searchOnEnter(e)} />
                </section>
            {getCurrentView()}
        </React.Fragment>
    );
}