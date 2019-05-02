import React from 'react';
import SplashContainer from './splash/splash_container';
import SignupFormContainer from './forms/signup_form_container';
import LoginFormContainer from './forms/login_form_container';
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

        <AuthRoute exact path = "/" component={SplashContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </div>
);

export default App