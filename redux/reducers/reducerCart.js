import PaidProduct from "../../data/PaidProductModel";
import { ADD_TO_CART } from "../constant";

const initialState = {
    cartProducts: [], // (id, price, title)
    total: 0,
};

const reducerCart = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const product = action.product;

            const newCourse = new PaidProduct(
                product.id,
                product.price,
                product.title,
                product.type,
            );

            return {
                ...state,
                cartProducts: state.cartProducts.concat(newCourse),
                total: state.total + product.price,
            };

        default:
            return state;
    }
};

export default reducerCart;
