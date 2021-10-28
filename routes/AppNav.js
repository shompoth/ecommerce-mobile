import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ProductsNavigator } from "./ProductsStackNav";

const AppNav = () => {
    return (
        <NavigationContainer>
            <ProductsNavigator />
        </NavigationContainer>
    );
};

export default AppNav;
