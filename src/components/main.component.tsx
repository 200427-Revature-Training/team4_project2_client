import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavBarComponent } from './navbar.component';
import { LoginComponent } from './Pages/login.component';
import { MyEventComponent } from './Pages/my-event.component';
import { EventComponent } from './Pages/event.component';
import { SearchEventComponent } from './Pages/search-events-component/search-event.component';


export const MainComponent: React.FC = () => {
    return (
        <div id="main-component">
            <BrowserRouter>
                <NavBarComponent></NavBarComponent>
                <main>
                    <Switch>
                        <Route exact path="/">
                            <LoginComponent />
                        </Route>
                        <Route path="/myevent">
                            <MyEventComponent />
                        </Route>
                        <Route path="/event">
                            <EventComponent />
                        </Route>
                        <Route path="/searchevent">
                            <SearchEventComponent />
                        </Route>
                    </Switch>
                </main>
            </BrowserRouter>
        </div>
    )
};
