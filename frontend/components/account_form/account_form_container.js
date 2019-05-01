import { login, signup, logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import AccountForm from './account_form';

const mapDispatchToProps = dispatch => {
    return ({
        login: user => dispatch(login(user)),
        signup: user => dispatch(signup(user)),
        logout: () => dispatch(logout)
    });
};

export default connect(null, mapDispatchToProps)(AccountForm);