import React from "react";
import { StyleSheet, Text, View } from "react-native";
import globalStyles from "../../../styles/globalStyles";

const ProductsOverview = ({ title, price }) => {
    return (
        <View style={styles.productContainer}>
            <Text style={styles.title}>
                {/* <Text numberOfLines={1} style={styles.title}> */}
                {title}
            </Text>
            <Text style={styles.price}>{price} €</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    productContainer: {
        backgroundColor: globalStyles.white,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        marginTop: 9,
    },
    title: {
        width: "70%",
    },
    price: {
        color: globalStyles.dimGray,
    },
});

export default ProductsOverview;
