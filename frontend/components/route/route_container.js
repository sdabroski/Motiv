import Route from './route';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchRoute, deleteRoute } from '../../actions/route_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        route: state.entities.routes[ownProps.match.params.id],
        routeToFetch: ownProps.match.params.id,
        //might be wrong
        waypoints: Object.values(state.entities.waypoints)
    });
};

const mapDispatchToProps = dispatch => ({
    fetchRoute: id => dispatch(fetchRoute(id)),
    deleteRoute: id => dispatch(deleteRoute(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Route);