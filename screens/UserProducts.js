import React from "react";
import { Alert, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import globalStyles from "../styles/globalStyles";

// Composants
import EmptyMsg from "../components/EmptyMsg/EmptyMsg";

// Icon
import { AntDesign } from "@expo/vector-icons";

// Redux
import { useSelector, useDispatch } from "react-redux";
// Redux Action
import { deleteProduct } from "../redux/actions/actionDeleteProduct";

const UserProducts = ({ navigation }) => {
    // Redux
    const loggedInMemberProducts = useSelector(
        state => state.products.loggedInMemberProducts,
    );
    const dispatch = useDispatch();

    // Fonction
    const handleDeleteProduct = id => {
        Alert.alert("Attention", "Voulez-vous supprimer ce cours ? ", [
            { text: "OUI", onPress: () => dispatch(deleteProduct(id)) },
            { text: "NON" },
        ]);
    };

    if (loggedInMemberProducts.length > 0) {
        return (
            <FlatList
                data={loggedInMemberProducts}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.productContainer}>
                        <View style={styles.productInfo}>
                            <Text numberOfLines={1} style={styles.productTitle}>
                                {item.title}
                            </Text>
                            <Text style={styles.productPrice}>{item.price} €</Text>
                        </View>
                        <View style={styles.btnIcons}>
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate("Edit", {
                                        productId: item.id,
                                    })
                                }
                                style={styles.touchableIcon}
                            >
                                <AntDesign
                                    name="edit"
                                    size={22}
                                    color={globalStyles.primary}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => handleDeleteProduct(item.id)}
                                style={styles.touchableIcon}
                            >
                                <AntDesign
                                    name="delete"
                                    size={22}
                                    color={globalStyles.primary}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        );
    }
    return <EmptyMsg>Pas de cours à afficher</EmptyMsg>;
};

const styles = StyleSheet.create({
    productContainer: {
        backgroundColor: globalStyles.white,
        borderRadius: 10,
        marginVertical: 9,
        marginHorizontal: 17,
        paddingTop: 15,
        paddingBottom: 15,
        paddingRight: 9,
        paddingLeft: 9,
    },
    productInfo: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 9,
        paddingHorizontal: 9,
    },
    productTitle: {
        width: "80%",
    },
    productPrice: {
        color: globalStyles.primary,
    },
    btnIcons: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    touchableIcon: {
        paddingHorizontal: 16,
        paddingTop: 5,
    },
});

export default UserProducts;
