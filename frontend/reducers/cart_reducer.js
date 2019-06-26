import { POST_TO_CART } from '../actions/cart_actions';

const cartReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case POST_TO_CART:
            newState = Object.assign({}, state, action.item);
            return newState;
        default:
            return state;
    }
};

export default cartReducer;