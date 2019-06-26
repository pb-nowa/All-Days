import { combineReducers } from 'redux';

import UserReducer from './user_reducer';
import ItemsReducer from './items_reducer';
import ShoesReducer from './shoes_reducer';
import CartReducer from './cart_reducer';

export default combineReducers({
    user: UserReducer,
    items: ItemsReducer,
    shoes: ShoesReducer,
    cart: CartReducer
});
