import Route from './route';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { receiveWaypoint } from '../../reducers/waypoints_reducer';


const mapStateToProps = (state, ownProps) => {
    return ({
        route: state.entities.routes[ownProps.match.params.id]

    });
};

const mapDispatchToProps = dispatch => ({
    updateWaypoints: waypoint => dispatch(receiveWaypoint(waypoint)),
    newRoute: route => dispatch(newRoute(route)),
    newWaypoint: waypoint => dispatch(newWaypoint(waypoint))
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);