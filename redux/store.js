import { createStore, combineReducers } from "redux";
import reducerProducts from "./reducers/reducerProducts";

const rootReducer = combineReducers({
    products: reducerProducts,
});

const store = createStore(rootReducer);

export default store;
