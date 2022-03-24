import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { productReducer } from './reducers/productReducer';

// combibe all reducers into one single reducer
const rootReducer = combineReducers({
    products: productReducer,
    // brands: brandReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;