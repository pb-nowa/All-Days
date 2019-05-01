import { login, signup, logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import Account from './account';

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return({
        ownProps: ownProps,
        state: state
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