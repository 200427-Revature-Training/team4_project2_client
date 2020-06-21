import React from 'react'
import {} from '@material-ui/core';
import {} from '@material-ui/icons';
import { AttendingEventComponent } from './user-attending-event.component';
import { HostingEventComponent } from './user-hosting-event.component';

export const UserEventComponent: React.FC = () => {

    return (
        <div>
            <AttendingEventComponent />
            <HostingEventComponent />
        </div>
    );
};