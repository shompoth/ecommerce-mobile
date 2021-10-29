import { createStore, combineReducers } from "redux";
import reducerProducts from "./reducers/reducerProducts";
import reducerCart from "./reducers/reducerCart";

const rootReducer = combineReducers({
    products: reducerProducts,
    cart: reducerCart,
});

const store = createStore(rootReducer);

export default store;
