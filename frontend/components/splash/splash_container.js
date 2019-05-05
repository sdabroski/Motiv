import Splash from './splash';
import { connect } from 'react-redux';
import {logout, login} from '../../actions/session_actions';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    demoSubmit: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash)

