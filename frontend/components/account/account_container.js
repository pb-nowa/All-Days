import { login, signup, logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import Account from './account';

const mapStateToProps = state => {
    return({
        currentUser: state.session.id,
        errors: state.errors.session,
    }); 
};

const mapDispatchToProps = dispatch => {
    return ({
        login: user => dispatch(login(user)),
        signup: user => dispatch(signup(user)),
        logout: () => dispatch(logout())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);