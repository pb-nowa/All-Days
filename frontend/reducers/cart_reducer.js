import { POST_TO_CART, REMOVE_FROM_CART } from '../actions/cart_actions';

const cartReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case POST_TO_CART:
            newState = Object.assign({}, state, action.item);
            return newState;
        case REMOVE_FROM_CART:
            newState = Object.assign({}, state);
            delete newState[`${action.id}-${action.size}`];
            return newState;
        default:
            return state;
    }
};

export default cartReducer;