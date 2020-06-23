import React from "react";
import { UserEventComponent } from "./users-event-container-component/user-event-container.component";
import { CreateEventModal } from "./create-event-modal.component";


export const MyEventComponent: React.FC = () => {
  return (
    <React.Fragment>
      <h2>My Event/Profile Page</h2>
      <CreateEventModal />
      <UserEventComponent />
    </React.Fragment>
  );
};
