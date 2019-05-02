import { combineReducers } from 'redux';

import UserReducer from './user_reducer';
import ItemsReducer from './items_reducer';

export default combineReducers({
    user: UserReducer,
    items: ItemsReducer,
});
