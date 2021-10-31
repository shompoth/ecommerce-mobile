import { createStore, combineReducers } from "redux";
import reducerProducts from "./reducers/reducerProducts";
import reducerCart from "./reducers/reducerCart";
import reducerPayment from "./reducers/reducerPayment";

const rootReducer = combineReducers({
    products: reducerProducts,
    cart: reducerCart,
    payments: reducerPayment,
});

const store = createStore(rootReducer);

export default store;
