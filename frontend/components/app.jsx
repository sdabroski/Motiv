import React from 'react';
import SplashContainer from './splash/splash_container';
import SignupFormContainer from './forms/signup_form_container';
import LoginFormContainer from './forms/login_form_container';
import NavbarContainer from './navbar/navbar_container';
import RouteContainer from './route/route_container';
import FeedContainer from './feed/feed_container';
import MapContainer from './map/map_container';
import RouteIndexContainer from './route/route_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';



const App = () => (
    <div>
        <NavbarContainer/>
        <Switch>
            <Route exact path = "/" component={SplashContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path = "/feed" component={FeedContainer} /> 
            <ProtectedRoute exact path="/routes/new" component={MapContainer} />
            <ProtectedRoute exact path="/routes/:id" component={RouteContainer} />
            <ProtectedRoute exact path="/routes" component={RouteIndexContainer} />
        </Switch>
    </div>
);

export default App
