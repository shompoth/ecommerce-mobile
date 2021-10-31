import { ADD_PAYMENT } from "../constant";

export const addPayment = (cartProducts, total) => {
    return {
        type: ADD_PAYMENT,
        orderInfos: {
            products: cartProducts,
            total,
        },
    };
};
