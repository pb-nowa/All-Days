import { merge } from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const userReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState=  merge({}, state, { [action.currentUser.id]: action.currentUser });
            return newState;
        default:
            return state;
    }
};

export default userReducer;