import React from "react";
<<<<<<< HEAD
import { UserEventComponent } from "./users-event-container-component/user-event-container.component";
import { CreateEventModal } from "./create-event-modal.component";
=======
import { CreateEventModal } from "./create-event-modal.component";
>>>>>>> a9dbafbc48d2ca533f67729eb9296f47b134ba2a

export const MyEventComponent: React.FC = () => {
  return (
    <React.Fragment>
      <h2>My Event/Profile Page</h2>
      <CreateEventModal />
      <UserEventComponent />
    </React.Fragment>
  );
};
