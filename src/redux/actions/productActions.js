import {
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_ERROR,
} from './actionTypes';
import axios from 'axios';


// API - 4 methods -> POST, GET, PUT, DELETE

export const fetchProducts = (dispatch) => {
    console.log("reached here to get the products");
    dispatch({ type: FETCH_PRODUCT_REQUEST });
    // Make and API call to get list of products
    axios
        .get('http://localhost:8000/phones')
        .then((response) => dispatch({ type: FETCH_PRODUCT_SUCCESS, data: response.data }) 
        )
        .catch((error) => console.log("API error:", error));

};