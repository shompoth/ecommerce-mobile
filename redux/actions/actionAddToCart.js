import { ADD_TO_CART } from "../constant";

export const addToCart = product => {
    return {
        type: ADD_TO_CART,
        product,
    };
};
