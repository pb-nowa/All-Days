// import { RECEIVE_SHOE } from "../actions/shoes_actions";

// const shoesReducer = (state = {}, action) => {
//     Object.freeze(state);
//     let newState;
//     switch (action.type) {
//         case RECEIVE_SHOE:
//             newState = Object.assign({}, state, { [action.shoe.id]: action.shoe });
//             return newState;
//         default:
//             return state;
//     }
// };

// export default shoesReducer;