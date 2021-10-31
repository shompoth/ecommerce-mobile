import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

// StackNav
import { ProductsNavigator } from "./ProductsStackNav";
import { CartNavigator } from "./CartStackNav";
import { PaymentNavigator } from "./PaymentStackNav";

// Icon
import { MaterialIcons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="Home"
                component={ProductsNavigator}
                options={{
                    title: "Catalogue",
                    drawerIcon: () => (
                        <MaterialIcons name="menu-book" size={24} color="black" />
                    ),
                }}
            />
            <Drawer.Screen
                name="Cart"
                component={CartNavigator}
                options={{
                    title: "Panier",
                    drawerIcon: () => (
                        <MaterialIcons name="shopping-cart" size={24} color="black" />
                    ),
                }}
            />
            <Drawer.Screen
                name="Payments"
                component={PaymentNavigator}
                options={{
                    title: "Achats",
                    drawerIcon: () => (
                        <MaterialIcons name="credit-card" size={24} color="black" />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
};
