import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // async call - API
import { productReducer } from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducer';

// logger

// combibe all reducers into one single reducer
const rootReducer = combineReducers({
    productsData: productReducer,
    // brands: brandReducer,
    cartData: cartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;