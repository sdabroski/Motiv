import { connect } from 'react-redux';
import SessionForm from './session_form';
import {signup, login} from '../../actions/session_actions'

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    formType: "signup",
});

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(signup(user)),
    demoSubmit: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
