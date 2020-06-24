import React from 'react'
import {} from '@material-ui/core';
import {} from '@material-ui/icons';
import { EventTableComponent } from './user-events-table.component';
import { UserHeaderEventComponent } from './user-header-event.component';

export const UserEventComponent: React.FC = () => {


    return (
        <React.Fragment>
            <UserHeaderEventComponent />
            <EventTableComponent />
        </React.Fragment>
    );
};