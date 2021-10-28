import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// screens
import Landing from "../screens/Landing";
import ProductInfos from "../screens/ProductInfos";
import Cart from "../screens/Cart";

const ProductsStackNavigator = createStackNavigator();

export const ProductsNavigator = () => {
    return (
        <ProductsStackNavigator.Navigator>
            <ProductsStackNavigator.Screen name="Landing" component={Landing} />
            <ProductsStackNavigator.Screen name="Details" component={ProductInfos} />
            <ProductsStackNavigator.Screen name="Cart" component={Cart} />
        </ProductsStackNavigator.Navigator>
    );
};
