import PaidProduct from "../../data/PaidProductModel";
import {
    ADD_TO_CART,
    REMOVE_PRODUCT_CART,
    ADD_PAYMENT,
    DELETE_PRODUCT,
} from "../constant";

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
        case REMOVE_PRODUCT_CART:
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
        case ADD_PAYMENT:
            return initialState;

        case DELETE_PRODUCT:
            const indexProductResult = state.cartProducts.findIndex(
                product => product.id === action.productId,
            );

            if (indexProductResult >= 0) {
                const productInfo = state.cartProducts[indexProductResult];
                const newCartProducts = [...state.cartProducts];
                newCartProducts.splice(indexProductResult, 1);

                return {
                    ...state,
                    cartProducts: newCartProducts,
                    total: state.total - productInfo.price,
                };
            }
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default reducerCart;
