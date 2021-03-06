import Map from './map';
import { connect } from 'react-redux';
import merge from 'lodash/merge';
import { withRouter } from 'react-router-dom';
import {newRoute} from '../../actions/route_actions';
import {newWaypoint} from '../../actions/waypoint_actions';
import { receiveWaypoint } from '../../reducers/waypoints_reducer';


const mapStateToProps = (state, ownProps) => {
    return ({
        waypoints: state.entities.waypoints
    });
};

const mapDispatchToProps = dispatch => ({
    updateWaypoints: waypoint => dispatch(receiveWaypoint(waypoint)),
    newRoute: route => dispatch(newRoute(route)),
    newWaypoint: waypoint => dispatch(newWaypoint(waypoint))
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);