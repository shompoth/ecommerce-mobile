import { REMOVE_PRODUCT_CART } from "../constant";

export const removeProductCart = productId => {
    return {
        type: REMOVE_PRODUCT_CART,
        productId: productId,
    };
};
