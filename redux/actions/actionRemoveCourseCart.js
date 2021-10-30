import { REMOVE_COURSE_CART } from "../constant";

export const removeCourseCart = productId => {
    return {
        type: REMOVE_COURSE_CART,
        productId: productId,
    };
};
