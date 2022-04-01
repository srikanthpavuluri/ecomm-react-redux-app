import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // async call - API
import { productReducer } from './reducers/productReducer';

// logger

// combibe all reducers into one single reducer
const rootReducer = combineReducers({
    productsData: productReducer,
    // brands: brandReducer,
    // carts: cartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;