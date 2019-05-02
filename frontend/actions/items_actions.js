import * as ItemsApiUtil from "../util/items_api_util";

export const RECEIVE_ITEMS = "RECEIVE_ITEMS";

const receiveShoeItems = items => {
    return ({
        action: RECEIVE_ITEMS,
        items: items
    });
};

export const mensShoes = () => (dispatch) => {
    ItemsApiUtil.receiveMensShoeItems()
    .then( items => dispatch(receiveShoeItems(items)));
};

export const womensShoes = () => (dispatch) => {
    ItemsApiUtil.receiveWomensShoeItems()
    .then ( items => dispatch(receiveWomensShoeItems(items)));
};
