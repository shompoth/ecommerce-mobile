import { CREATE_PRODUCT } from "../constant";

export const createProduct = (title, type, image, price, description) => {
    return {
        type: CREATE_PRODUCT,
        newProduct: {
            title,
            type,
            image,
            price,
            description,
        },
    };
};
