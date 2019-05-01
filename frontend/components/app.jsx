import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './forms/SignupFormContainer';
import LoginFormContainer from './forms/LoginFormContainer';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';


const App = () => (
    <div>
        <header>
            <GreetingContainer />
        </header>

        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
    </div>
);

export default App