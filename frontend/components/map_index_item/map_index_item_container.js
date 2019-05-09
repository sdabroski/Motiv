import MapIndexItem from './map_index_item';
import { connect } from 'react-redux';
import merge from 'lodash/merge';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
    return ({
        waypoints: ownProps.waypoints,
        workout_type: ownProps.workout_type,
        distance: ownProps.distance,
        time: ownProps.time,
        which_page: ownProps.which_page
        
    });
};

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(MapIndexItem);