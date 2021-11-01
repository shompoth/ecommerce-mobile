import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import globalStyles from "../styles/globalStyles";

// screens
import Landing from "../screens/Landing";
import ProductInfos from "../screens/ProductInfos";

// Header buttons
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderIcon from "../components/CustomHeaderIcon/CustomHeaderIcon";

const ProductsStackNavigator = createStackNavigator();

export const ProductsNavigator = () => {
    return (
        <ProductsStackNavigator.Navigator
            screenOptions={({ navigation }) => ({
                headerStyle: {
                    backgroundColor: globalStyles.primary,
                },
                headerTitleStyle: {
                    fontWeight: "bold",
                },
                headerTintColor: globalStyles.white,
                headerRight: () => (
                    <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}>
                        <Item
                            title="panier"
                            iconName="shopping-cart"
                            onPress={() => navigation.navigate("Cart")}
                        />
                    </HeaderButtons>
                ),
                headerLeft: () => (
                    <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}>
                        <Item
                            title="Menu"
                            iconName="menu"
                            onPress={() => navigation.openDrawer()}
                        />
                    </HeaderButtons>
                ),
            })}
        >
            <ProductsStackNavigator.Screen name="Catalogue" component={Landing} />
            <ProductsStackNavigator.Screen
                name="Details"
                component={ProductInfos}
                options={({ route }) => ({
                    title: route.params.title,
                })}
            />
        </ProductsStackNavigator.Navigator>
    );
};
