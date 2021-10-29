import PRODUCTS from "../../data/testData";
import { ADD_TO_CART } from "../constant";

const initialState = {
    existingProducts: PRODUCTS,
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
            };

        default:
            return state;
    }
    return state;
};

export default reducerProducts;
