import RouteIndex from './route_index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchAllRoutes } from '../../actions/route_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        routes: Object.values(state.entities.routes),
        waypoints: Object.values(state.entities.waypoints)
    });
};

const mapDispatchToProps = dispatch => ({
    fetchAllRoutes: () => dispatch(fetchAllRoutes())
});

export default connect(mapStateToProps, mapDispatchToProps)(RouteIndex);