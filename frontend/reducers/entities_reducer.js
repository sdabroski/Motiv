import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import {waypointsReducer} from './waypoints_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    waypoints: waypointsReducer
});

export default entitiesReducer;