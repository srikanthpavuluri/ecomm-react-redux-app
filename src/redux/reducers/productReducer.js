import {
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_ERROR,
} from '../actions/actionTypes';

// initialize the state
const initialState = {
    products: [],
    isLoading: false,
    error: false,
    errorMessage: ''
};

// reducer function
export const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_PRODUCT_REQUEST: 
            return {
                ...state,
                isLoading: true,
                error: false,
                errorMessage: ''
            };
        case FETCH_PRODUCT_SUCCESS:
            console.log(action, 'action')
            return {
                ...state,
                isLoading: false,
                products: action.data,
                error: false,
                errorMessage: ''
            };
        case FETCH_PRODUCT_ERROR:
                console.log(action, 'action')
                return {
                    ...state,
                    isLoading: false,
                    products: [],
                    error: true,
                    errorMessage: 'Failed to Products'
                };
        default: return state;
    }
};

