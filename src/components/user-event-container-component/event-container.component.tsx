import React from 'react'
import {} from '@material-ui/core';
import { HostingEventComponent } from './hosting-event-container.component';
import { AttendingEventComponent } from './attending-event-container.component';

export const EventContainerComponent: React.FC = () => {

    return (
        <div>
            <HostingEventComponent />
            <AttendingEventComponent />
        </div>
    );
};