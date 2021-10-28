import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import globalStyles from "../styles/globalStyles";

// screens
import Landing from "../screens/Landing";
import ProductInfos from "../screens/ProductInfos";
import Cart from "../screens/Cart";

const ProductsStackNavigator = createStackNavigator();

export const ProductsNavigator = () => {
    return (
        <ProductsStackNavigator.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: globalStyles.green,
                },
                headerTitleStyle: {
                    fontWeight: "bold",
                },
                headerTintColor: globalStyles.white,
            }}
        >
            <ProductsStackNavigator.Screen name="Landing" component={Landing} />
            <ProductsStackNavigator.Screen
                name="Details"
                component={ProductInfos}
                options={({ route }) => ({
                    title: route.params.title,
                })}
            />
            <ProductsStackNavigator.Screen name="Cart" component={Cart} />
        </ProductsStackNavigator.Navigator>
    );
};
