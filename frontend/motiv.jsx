import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionApiUtil from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';
import { login } from './actions/session_actions';
import { newRoute, fetchRoute, fetchAllRoutes} from './actions/route_actions';
import { newWaypoint } from './actions/waypoint_actions';
// import {fetchAllRoutes} from './util/routes_api_util';



document.addEventListener('DOMContentLoaded', () => {
    let store

    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);

    window.signup = SessionApiUtil.signup
    window.logout = SessionApiUtil.logout
    window.newRoute = newRoute;
    window.newWaypoint = newWaypoint;
    // window.login = SessionApiUtil.login
    window.login = login;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.fetchRoute = fetchRoute;
    window.fetchAllRoutes = fetchAllRoutes;
});