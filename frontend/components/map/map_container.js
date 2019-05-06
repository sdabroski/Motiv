import Map from './map';
import { connect } from 'react-redux';
import merge from 'lodash/merge';
import { withRouter } from 'react-router-dom';
import { receiveWaypoint } from '../../reducers/waypoints_reducer';


const mapStateToProps = (state, ownProps) => {
    return ({
        waypoints: state.entities.waypoints
    });
};

const mapDispatchToProps = dispatch => ({
    updateWaypoints: waypoint => dispatch(receiveWaypoint(waypoint))
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);