import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionApiUtil from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';
import { login } from './actions/session_actions';



document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);

    window.signup = SessionApiUtil.signup
    window.logout = SessionApiUtil.logout
    // window.login = SessionApiUtil.login
    window.login = login;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
});