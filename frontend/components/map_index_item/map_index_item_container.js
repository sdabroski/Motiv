import MapIndexItem from './map_index_item';
import { connect } from 'react-redux';
import merge from 'lodash/merge';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
    return ({
        waypoints: ownProps.waypoints,
        type: ownProps.type,
        distance: ownProps.distance,
        time: ownProps.time
    });
};

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(MapIndexItem);