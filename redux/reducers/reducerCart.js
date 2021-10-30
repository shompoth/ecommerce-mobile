import PaidProduct from "../../data/PaidProductModel";
import { ADD_TO_CART, REMOVE_COURSE_CART } from "../constant";

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
        case REMOVE_COURSE_CART:
            const indexResult = state.cartProducts.findIndex(
                product => product.id === action.productId,
            );

            const newCartProductsArray = [...state.cartProducts];
            newCartProductsArray.splice(indexResult, 1);

            const productPrice = state.cartProducts[indexResult].price;

            return {
                ...state,
                cartProducts: newCartProductsArray,
                total: state.total - productPrice,
            };
        default:
            return state;
    }
};

export default reducerCart;
