import * as WaypointsApiUtil from '../util/waypoints_api_util';

export const RECEIVE_WAYPOINT = "RECEIVE_WAYPOINT";

export const newWaypoint = waypoint => dispatch => (
    WaypointsApiUtil.newWaypoint(waypoint)
    .then(waypoint => dispatch(receiveWaypoint(waypoint)))
)

const receiveWaypoint = waypoint => ({
    type: RECEIVE_WAYPOINT,
    waypoint
});


//test waypoint for window

const testWaypoint = 
    {
        route_id: 1,
        order: 1,
        lat: "hmmm",
        lng: "hmmm",
    }