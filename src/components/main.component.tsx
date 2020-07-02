import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavBarComponent } from "./navbar.component";
import { LoginComponent } from "./Pages/login.component/login.component";
import { MyEventComponent } from "./Pages/my-event-component/my-event.component";
import { EventComponent } from "./Pages/event.component";
import { SearchEventComponent } from "./Pages/search-events-component/search-event.component";
import { SignUpComponent } from "./Pages/signup.component/signup.component";
import { HomeComponent } from "./Pages/home.component/home.component";
import { ForumComponent } from "./Pages/forum.component/forum.component";
import { MainFeedComponent } from "./Pages/feed.component/main-feed.component";

export const MainComponent: React.FC = () => {
  const [eventId, setEventId] = useState(0);
  const getEvent = (input: number) => {
    setEventId(input);
  };
  return (
    <div id="main-component">
      <BrowserRouter>
        <NavBarComponent></NavBarComponent>
        <main>
          <div>
            <Switch>
              <Route exact path="/">
                <HomeComponent />
              </Route>
              <Route path="/login">
                <LoginComponent />
              </Route>
              <Route path="/signup">
                <SignUpComponent />
              </Route>
              <Route path="/myevent">
                <MyEventComponent />
              </Route>
              <Route path="/event">
                <EventComponent />
              </Route>
              <Route path="/searchevent">
                <SearchEventComponent getEvent={getEvent} />
              </Route>
              <Route path="/forum">
                <ForumComponent eventId={eventId} />
              </Route>
              <Route path="/feed">
                <MainFeedComponent />
              </Route>
            </Switch>
          </div>
        </main>
      </BrowserRouter>
    </div>
  );
};
