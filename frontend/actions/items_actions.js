import { receiveShoeItems } from "../util/items_api_util";

export const RECEIVE_ITEMS = "RECEIVE_ITEMS";

const fetchShoeItems = items => {
    return ({
        type: RECEIVE_ITEMS,
        items: items
    });
};

export const fetchItems = (id) => (dispatch) => (
    receiveShoeItems(id)
    .then( items => dispatch(fetchShoeItems(items)))
);


