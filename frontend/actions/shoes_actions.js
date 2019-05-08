import { receiveShoe } from '../util/shoes_api_util';

export const RECEIVE_SHOE = "RECEIVE_SHOE";

const collectShoe = shoe => {
    return ({
        type: RECEIVE_SHOE,
        shoe: shoe
    });
};

export const fetchShoe = id => dispatch => (
    receiveShoe(id)
    .then( shoe => dispatch(collectShoe(shoe)))
);

window.fetchShoe = fetchShoe;