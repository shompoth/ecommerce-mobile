// Data
import PRODUCTS from "../../data/testData";

// Class
import ProductModel from "../../data/ProductModel";

// Constant
import {
    ADD_TO_CART,
    DELETE_PRODUCT,
    REMOVE_PRODUCT_CART,
    EDIT_PRODUCT,
} from "../constant";

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

        case EDIT_PRODUCT:
            const productId = action.productId;
            const indexProductToUpdate = state.loggedInMemberProducts.findIndex(
                product => product.id === productId,
            );
            const updateProduct = new ProductModel(
                productId,
                action.updatedProduct.title,
                action.updatedProduct.type,
                action.updatedProduct.desc,
                state.loggedInMemberProducts[indexProductToUpdate].image,
                action.updatedProduct.price,
                state.loggedInMemberProducts[indexProductToUpdate].selected,
                state.loggedInMemberProducts[indexProductToUpdate].instructorId,
            );

            const newLoggedInMemberProducts = [...state.loggedInMemberProducts];
            newLoggedInMemberProducts[indexProductToUpdate] = updateProduct;

            const indexExistingProducts = state.existingProducts.findIndex(
                product => product.id === productId,
            );
            const newExistingProducts = [...state.existingProducts];
            newExistingProducts[indexExistingProducts] = updateProduct;

            return {
                ...state,
                existingProducts: newExistingProducts,
                loggedInMemberProducts: newLoggedInMemberProducts,
            };

        default:
            return state;
    }
    return state;
};

export default reducerProducts;
