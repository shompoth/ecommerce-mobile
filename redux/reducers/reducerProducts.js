import PRODUCTS from "../../data/testData";
import { ADD_TO_CART, DELETE_PRODUCT, REMOVE_PRODUCT_CART } from "../constant";

const initialState = {
    existingProducts: PRODUCTS,
    loggedInMemberProducts: PRODUCTS.filter(product => product.instructorId === "1"),
};

const reducerProducts = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const indexToModify = state.existingProducts.findIndex(
                course => course.id === action.product.id,
            );

            const copyExistingProducts = [...state.existingProducts];
            copyExistingProducts[indexToModify].selected = true;

            return {
                ...state,
                existingProducts: copyExistingProducts,
                loggedInMemberProducts: state.loggedInMemberProducts,
            };

        case REMOVE_PRODUCT_CART:
            const indexToDeleteFromCart = state.existingProducts.findIndex(
                course => course.id === action.productId,
            );
            const copyExistingProductsRemoved = [...state.existingProducts];
            copyExistingProductsRemoved[indexToDeleteFromCart].selected = false;

            return {
                ...state,
                existingProducts: copyExistingProductsRemoved,
                loggedInMemberProducts: state.loggedInMemberProducts,
            };

        case DELETE_PRODUCT:
            return {
                ...state,
                existingProducts: state.existingProducts.filter(
                    product => product.id !== action.productId,
                ),
                loggedInMemberProducts: state.loggedInMemberProducts.filter(
                    product => product.id !== action.productId,
                ),
            };
        default:
            return state;
    }
    return state;
};

export default reducerProducts;
