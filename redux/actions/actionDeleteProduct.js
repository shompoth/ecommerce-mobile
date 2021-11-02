import { DELETE_PRODUCT } from "../constant";

export const deleteProduct = productId => {
    return {
        type: DELETE_PRODUCT,
        productId,
    };
};
