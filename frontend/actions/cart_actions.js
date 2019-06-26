
export const POST_TO_CART = "POST_TO_CART";

const postToCart = (payload) => {
    return({
        type: POST_TO_CART,
        item: payload
    });
};

function receiveCartItems(item, size){
    return ({
        item, size
    });
};

export const addToCart = (item, size) => dispatch => {
    const payload = receiveCartItems(item, size);
    function _func(payload){
        return dispatch(postToCart(payload));
    }
    return _func(payload);
};