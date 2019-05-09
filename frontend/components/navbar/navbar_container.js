import Navbar from './navbar';
import { connect } from 'react-redux';
import merge from 'lodash/merge';
import {withRouter} from 'react-router-dom'
import { logout } from '../../actions/session_actions';


const mapStateToProps = (state, ownProps) => {
    return ({
        currentUser: state.entities.users[state.session.id],
        currentURL: ownProps.location.pathname
    })
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar))