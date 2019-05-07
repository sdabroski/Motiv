import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import {waypointsReducer} from './waypoints_reducer';
import routesReducer from './routes_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    waypoints: waypointsReducer,
    routes: routesReducer
});

export default entitiesReducer;