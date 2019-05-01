import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

export const login = user => dispatch => {
    // debugger
    return SessionApiUtil.login(user).then(user => dispatch(receiveCurrentUser(user)))
};
export const signup = user => dispatch => (
    SessionApiUtil.signup(user).then(user => dispatch(receiveCurrentUser(user)))
);

export const logout = () => dispatch => (
    SessionApiUtil.logout().then(() => dispatch(logoutCurrentUser()))
);


const receiveErrors = errors => dispatch => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});