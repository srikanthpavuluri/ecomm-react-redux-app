import {
    ADD_TO_CART,
    DELETE_FROM_CART,
    UPDATE_QTY,
    EMPTY_CART,
} from './actionTypes';

// addToCart
export const addToCart = (dispatch, product) => {
    let items = JSON.parse(window.localStorage.getItem("cart")).items; // old list
    items = [...items, product]; // add the new product to the old list -> new list
    
    window.localStorage.clear();    // clear the old cart list in LS
    
    window.localStorage.setItem("cart", JSON.stringify( { items } )); // update the new cart list in LS
    
    dispatch({ type: ADD_TO_CART, data: items});
    
};
// deleteFromCart
export const removeFromCart = (dispatch, product) => {
    let items = JSON.parse(window.localStorage.getItem("cart")).items; // old list
    items = items.filter(item => item.id !== product.id); // remove an product to the old list -> new list
    
    window.localStorage.clear();    // clear the old cart list in LS
    
    window.localStorage.setItem("cart", JSON.stringify( { items } )); // update the new cart list in LS
    
    dispatch({ type: DELETE_FROM_CART, data: items});
    
};

// updateCartQty

// emptyCart