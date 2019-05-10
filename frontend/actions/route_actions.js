
import * as RouteApiUtil from '../util/routes_api_util';


export const RECEIVE_ROUTE = "RECEIVE_ROUTE";
export const RECEIVE_ROUTES = "RECEIVE_ROUTES";
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

export const fetchAllRoutes = () => dispatch => (
    RouteApiUtil.fetchAllRoutes()
    .then(payload => dispatch(receiveRoutes(payload)))
)

export const deleteRoute = (id) => dispatch => (
    RouteApiUtil.deleteRoute(id)
)

const receiveRoute = ({route, waypoints}) => ({
    type: RECEIVE_ROUTE,
    route: route,
    waypoints: waypoints
});

const receiveRoutes = ({routes, waypoints}) => ({
    type: RECEIVE_ROUTES,
    routes: routes,
    waypoints: waypoints
});

const receiveNewRoute = (route) => ({
    type: NEW_ROUTE,
    route
});