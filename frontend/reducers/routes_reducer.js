import {RECEIVE_ROUTE, NEW_ROUTE} from '../actions/route_actions';
import merge from 'lodash/merge';
import { RECEIVE_WAYPOINT, waypointsReducer } from './waypoints_reducer';
import { join } from 'path';
//NOT YET BUILT
// import {RECEIVE_WAYPOINT} from '../actions/waypoint_actions'; 

const routesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case NEW_ROUTE:
            return Object.assign({}, state, { [action.route.id]: action.route })
        default:
            return state
    }
};

export default routesReducer;


      // case RECEIVE_WAYPOINT:
        //     newState = merge({}, state);
        //     let route = newstate[action.waypoint.route_id]
        //     if (Array.isArray(route.waypoints)){

        //     }


