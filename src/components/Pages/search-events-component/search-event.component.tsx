import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { SocialEvent } from '../../../models/Event';
import { JoinEventComponent } from './join-event.component';
import { CategoryListComponent } from './category-list.component';
import { SearchListComponent } from './search-list.component';


export const childViews = {
    searchedList: 'SEARCHED_LIST',
    categoryList: 'CATEGORY_LIST',
    joinList: 'JOIN_LIST'
};

export const SearchEventComponent: React.FC = () => {
    const [view, setView] = useState<'SEARCHED_LIST' | 'CATEGORY_LIST' | 'JOIN_LIST'>('CATEGORY_LIST');
    const [socialEvents, setSocialEvents] = useState<SocialEvent[]>([]);
    const [inputSocialEventKey, setInputSocialEventKey] = useState('');
    const [socialEventType, setSocialEventType] = useState<'OUTDOORS' | 'ARTS_CRAFTS' | 'BOARD_VIDEO_GAMES' | 'EXERCISE' |
        'CONVENTIONS' | 'MOVIES_TV' | 'TALK_DISCUSSION' | 'OTHER' | ''>('');

    const addSocialEvent = (socialEvent: SocialEvent) => {
        setSocialEvents([...socialEvents, socialEvent]);
    }

    const getCurrentView = () => {
        switch (view) {
            case childViews.categoryList: return <CategoryListComponent setView={setView}
                setSocialEventType={setSocialEventType} />;
            case childViews.joinList: return <JoinEventComponent setView={setView} socialEvents={socialEvents} 
                                        socialEventType={socialEventType} setSocialEventType={setSocialEventType} />
            case childViews.searchedList: return <SearchListComponent setView={setView} socialEvents={socialEvents} 
                                                    inputSocialEventKey={inputSocialEventKey}/>
            default: return <React.Fragment />
        }
    }

    const searchOnEnter = (e: any) => {
        if (e.key === 'Enter') {
            setView('SEARCHED_LIST');
        }
    }

    return (
        <main>
            <TextField id="standard-basic" label="Search" value={inputSocialEventKey} 
                        onChange={(e) => setInputSocialEventKey(e.target.value)} onKeyPress={(e) => searchOnEnter(e)} />
            {getCurrentView()}
        </main>
    );
}