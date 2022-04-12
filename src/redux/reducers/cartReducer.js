import {
    ADD_TO_CART,
    DELETE_FROM_CART,
    UPDATE_QTY,
    EMPTY_CART,
} from '../actions/actionTypes';

const cartItemLS = window.localStorage.getItem("cart"); // accessing the data from the local storage
// initial state 
let initialState = JSON.parse(cartItemLS);
if (initialState == undefined) {
    initialState = {
        items: [],
    };
    window.localStorage.setItem("cart", JSON.stringify(initialState)); // udpating the data to the local storage
};

// reducers
export const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            return {
                items: action.data,
            }
        case DELETE_FROM_CART:
            break;
        case UPDATE_QTY:
            break;
        case EMPTY_CART:
            break;
        default:
            return state;
    }
};
