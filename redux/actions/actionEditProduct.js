import { EDIT_PRODUCT } from "../constant";

export const editProduct = (id, title, type, price, desc) => {
    return {
        type: EDIT_PRODUCT,
        productId: id,
        updatedProduct: {
            title,
            type,
            price,
            desc,
        },
    };
};
