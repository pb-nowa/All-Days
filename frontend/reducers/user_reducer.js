import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const userReducer = (state = {}, action) => {
    Object.freeze(state);

    let newState;
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState = Object.assign({}, state, { [action.user.id]: action.user });
            return newState;
        default:
            return state;
    }

};

export default userReducer;