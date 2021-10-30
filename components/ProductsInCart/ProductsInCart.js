import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import globalStyles from "../../styles/globalStyles";

// Icon
import { MaterialIcons } from "@expo/vector-icons";

const ProductsInCart = ({ title, price, type, onDelete }) => {
    return (
        <View style={styles.productsContainer}>
            {/* <Text numberOfLines={1} style={styles.productTitle}> */}
            <Text style={styles.productTitle}>{title}</Text>
            <Text style={styles.productPrice}>{price.toFixed(2)} €</Text>
            {/* <Text style={styles.productPrice}>{price} €</Text> */}
            <TouchableOpacity onPress={onDelete}>
                <MaterialIcons name="delete" size={24} color={globalStyles.primary} />
            </TouchableOpacity>
        </View>
    );
};

export default ProductsInCart;

const styles = StyleSheet.create({
    productsContainer: {
        backgroundColor: globalStyles.white,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        marginBottom: 9,
    },
    productTitle: {
        width: "65%",

        // backgroundColor: "red",
    },
    productPrice: {
        textAlign: "right",
        padding: 9,
        width: "25%",
        // backgroundColor: "green",
    },
});
