import {
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_ERROR,
} from './actionTypes';


export const fetchProducts = (dispatch) => {
    dispatch({ type: FETCH_PRODUCT_REQUEST });
    // MAke and API call to get list of products
};