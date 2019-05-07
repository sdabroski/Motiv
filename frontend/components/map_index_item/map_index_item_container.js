import MapIndexItem from './map_index_item';
import { connect } from 'react-redux';
import merge from 'lodash/merge';
import { withRouter } from 'react-router-dom';


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