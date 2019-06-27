
export const POST_TO_CART = "POST_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

const postToCart = (payload) => {
    return({
        type: POST_TO_CART,
        item: payload
    });
};

const removeCartItem = (id, size) => {
    return({
        type: REMOVE_FROM_CART,
        id,
        size
    });
};

function receiveCartItems(item, size){
    let state = Object.assign({}, item, { size });
    let key = `${item.id}-${size}`;
    return ({
        [key]: state
    });
}

export const addToCart = (item, size) => dispatch => {
    const payload = receiveCartItems(item, size);
    function _func(payload){
        return dispatch(postToCart(payload));
    }
    return _func(payload);
};



export const removeFromCart = (id, size) => dispatch => {
    function _func(id, size){
        return dispatch(removeCartItem(id, size));
    }
    return _func(id, size);
}