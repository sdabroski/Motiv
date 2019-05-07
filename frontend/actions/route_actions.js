
import * as RouteApiUtil from '../util/routes_api_util';


export const RECEIVE_ROUTE = "RECEIVE_ROUTE";
export const NEW_ROUTE = "NEW_ROUTE";

export const newRoute = route => dispatch => (
    RouteApiUtil.newRoute(route)
        .then(route => {
            dispatch(receiveNewRoute(route))
            return route;
        })
);

export const fetchRoute = id => dispatch => (
    RouteApiUtil.fetchRoute(id)
    .then(payload => dispatch(receiveRoute(payload)))
);

const receiveRoute = ({route, waypoints}) => ({
    type: RECEIVE_ROUTE,
    route: route,
    waypoints: waypoints
});

const receiveNewRoute = (route) => ({
    type: NEW_ROUTE,
    route
});