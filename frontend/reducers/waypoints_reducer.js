import merge from 'lodash/merge';

export const waypointsReducer = (state = [], action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_WAYPOINT:
            newState = state.slice(0);
            newState.push(action.waypoint);
            return newState;
        default:
            return state;
    }
};

export const RECEIVE_WAYPOINT = "RECEIVE_WAYPOINT";

export const receiveWaypoint = waypoint => ({
    type: RECEIVE_WAYPOINT,
    waypoint
});