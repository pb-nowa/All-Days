import * as SessionApiUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveUser = (user) => {
    return ({
        type: RECEIVE_CURRENT_USER,
        user: user
    });
};

const logoutUser = () => {
    return ({
        type: LOGOUT_CURRENT_USER
    });
};

const receiveErrors = errors => {
    return ({
        errors: errors,
        type: RECEIVE_SESSION_ERRORS
    });
};

export const login = (user) => (dispatch) => (
    SessionApiUtil.login(user)
    .then( user => dispatch(receiveUser(user)))
);

export const signup = (user) => (dispatch) => (
    SessionApiUtil.signup(user)
    .then( user => dispatch(receiveUser(user)))
);

export const logout = () => (dispatch) => (
    SessionApiUtil.logout()
    .then( user => dispatch(logoutUser(user)))
);



