import React from 'react';
import { SocialEvent } from '../../../models/Event';


interface SearchListComponentProps {
    setView: (str: 'SEARCHED_LIST' | 'CATEGORY_LIST' | 'JOIN_LIST') => void;
    socialEvents: SocialEvent[];
    inputSocialEventKey: string;
}

export const SearchListComponent: React.FC<SearchListComponentProps> = (props) => {
    return (
        <div>
            <h2>Searching for things</h2>
        </div>
    )
}