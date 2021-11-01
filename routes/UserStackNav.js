import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import globalStyles from "../styles/globalStyles";

// Screen
import UserProducts from "../screens/UserProducts";
import UserEditProducts from "../screens/UserEditProducts";

// Header buttons
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderIcon from "../components/CustomHeaderIcon/CustomHeaderIcon";

const UserStackNavigator = createStackNavigator();

export const UserNavigator = () => {
    return (
        <UserStackNavigator.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: globalStyles.primary,
                },
                headerTitleStyle: {
                    fontWeight: "bold",
                },
                headerTintColor: globalStyles.white,
            }}
        >
            <UserStackNavigator.Screen
                name="Courses"
                component={UserProducts}
                options={({ navigation }) => ({
                    title: "Mes Produits",
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}>
                            <Item
                                title="Editer"
                                iconName="library-add"
                                onPress={() =>
                                    navigation.navigate("Edit", {
                                        title: "Créer un produit",
                                    })
                                }
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
            />
            <UserStackNavigator.Screen
                name="Edit"
                component={UserEditProducts}
                options={({ route }) => ({
                    title: route.params.title ? route.params.title : "Éditer le produit",
                })}
            />
        </UserStackNavigator.Navigator>
    );
};
