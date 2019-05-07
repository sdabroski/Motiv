import merge from 'lodash/merge';
import {RECEIVE_WAYPOINT} from '../actions/waypoint_actions';
import {RECEIVE_ROUTE} from '../actions/route_actions';

export const waypointsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_WAYPOINT:
            return Object.assign({}, state, { [action.waypoint.id]:action.waypoint })
        // case RECEIVE_ROUTE:
        //     return merge({}, action.waypoints)
        default:
            return state;
    }
};

